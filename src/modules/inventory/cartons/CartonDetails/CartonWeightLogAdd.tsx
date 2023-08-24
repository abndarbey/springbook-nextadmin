import { Text } from '@mantine/core'
import { openConfirmModal } from '@mantine/modals'

export function cartonWeightLogAddModal() {
  openConfirmModal({
    title: 'Delete your profile',
    centered: true,
    labels: { confirm: 'Delete account', cancel: "No don't delete it" },
    confirmProps: { color: 'red' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
    children: (
      <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
      </Text>
    ),
  })
}

function addCartonWeightLog() {
  return (
    <Text size="sm">
      Are you sure you want to delete your profile? This action is destructive and you will have
      to contact support to restore your data.
    </Text>
  )
}