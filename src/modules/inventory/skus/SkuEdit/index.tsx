import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { Checkbox } from '@mantine/core'
import { useSkuUpdateMutation, UpdateSku, useSkuQuery } from 'gql/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import { useState } from 'react'
import PageLoader from 'components/PageLoader'
import { PageProps } from 'types/types'

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function SkuEdit(props: PageProps) {
    const router = useRouter()
    const [updateSku] = useSkuUpdateMutation({})
    const [formData, setFormData] = useState(false)
    const [isRawMaterial, setIsRawMaterial] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Skus', href: '/inventory/skus' },
        { title: props.code, href: `/inventory/skus/${props.code}` },
        { title: 'Edit', href: '#' },
    ]

    const form = useForm({
      validate: yupResolver(schema),
      initialValues: {
          isRawMaterial: false,
      },
  })

  // fetch data
  const { data, loading, error } = useSkuQuery(
      { variables: { code: props.code } }
  )
  if (loading) {
      return (
          <PageLoader />
      )
  }
  if (!loading && error) {
      showNotification({
          disallowClose: false,
          color: 'red',
          message: error.message,
      })
      return <PageLoader isError={true} />
  }
  if (data && !formData) {
      form.setValues(
          {
            isRawMaterial: data.sku?.isRawMaterial!,
          }
      )
      setFormData(true)
      setIsRawMaterial(data.sku?.isRawMaterial!)
  }

  const setChecked = (checked: boolean) => {
    setIsRawMaterial(checked)
    form.values.isRawMaterial = checked
  }

  const handleSubmit = () => {
      var updateSkuInput: UpdateSku = {
          isRawMaterial: form.values.isRawMaterial,
      }

      updateSku({
          variables: {id: data?.sku.id!, input: updateSkuInput}
      }).then((res: any) => {
          let welcomeMsg: string = `Sku ${res.data.skuUpdate.name} Updated`
          
          showNotification({
              disallowClose: false,
              color: 'green',
              message: welcomeMsg,
          })
          router.push(`/inventory/skus/${res.data.skuUpdate.code}`)
      }).catch((error: any) => {
          showNotification({
              disallowClose: false,
              color: 'red',
              message: error.message,
          })
      })
  }

    const handleCancel = () => {
      router.push(`/inventory/skus/${props.code}`)
    }

    return (
      <Page navTrails={navTrails}>
        <PageHeader title={props.title!} />
        <FormCard
          submitButtonName='Update'
          handleSubmit={form.onSubmit(handleSubmit)}
          handleCancel={handleCancel}
        >
          <Checkbox
            mt="md"
            label="Is Raw Material"
            checked={isRawMaterial}
            onChange={(e) => setChecked(e.currentTarget.checked)}
          />
        </FormCard>
      </Page>
    )
}