import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  NullBool: any;
  NullFloat: any;
  NullInt: any;
  NullInt64: any;
  NullString: any;
  NullTime: any;
  NullUUID: any;
  Time: any;
  UUID: any;
  Upload: any;
};

export enum Action {
  Archive = 'Archive',
  DetachFromCarton = 'DetachFromCarton',
  DetachFromContainer = 'DetachFromContainer',
  DetachFromContract = 'DetachFromContract',
  DetachFromOrder = 'DetachFromOrder',
  DetachFromPallet = 'DetachFromPallet',
  DetachFromRetailer = 'DetachFromRetailer',
  DetachFromSku = 'DetachFromSKU',
  InheritCartonHistory = 'InheritCartonHistory',
  SetBonusLoyaltyPoints = 'SetBonusLoyaltyPoints',
  SetCarton = 'SetCarton',
  SetContainer = 'SetContainer',
  SetContract = 'SetContract',
  SetOrder = 'SetOrder',
  SetPallet = 'SetPallet',
  SetRetailer = 'SetRetailer',
  SetSku = 'SetSKU',
  Unarchive = 'Unarchive'
}

export type Auther = {
  __typename?: 'Auther';
  id?: Maybe<Scalars['ID']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orgUID?: Maybe<Scalars['NullUUID']>;
  roleID?: Maybe<Scalars['NullInt64']>;
  sessionToken?: Maybe<Scalars['UUID']>;
};

export type Batch = {
  __typename?: 'Batch';
  batchNumber?: Maybe<Scalars['String']>;
  cartonCount?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  description?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['NullTime']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<Organization>;
  productionDate?: Maybe<Scalars['NullTime']>;
  sku?: Maybe<Sku>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type BatchActionInput = {
  bool?: InputMaybe<Scalars['NullBool']>;
  dateTime?: InputMaybe<Scalars['NullTime']>;
  id?: InputMaybe<Scalars['NullInt64']>;
  no?: InputMaybe<Scalars['NullInt64']>;
  str?: InputMaybe<Scalars['NullString']>;
};

export type BatchCatalogue = {
  __typename?: 'BatchCatalogue';
  batchNumber?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  description?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['NullTime']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<Organization>;
  productionDate?: Maybe<Scalars['NullTime']>;
  sku?: Maybe<SkuCatalogue>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type BatchCataloguesResult = {
  __typename?: 'BatchCataloguesResult';
  batchCatalogues: Array<BatchCatalogue>;
  total: Scalars['Int'];
};

export type BatchResult = {
  __typename?: 'BatchResult';
  batches: Array<Batch>;
  total: Scalars['Int'];
};

export type Carton = {
  __typename?: 'Carton';
  batch?: Maybe<Batch>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  latestTrackerLog?: Maybe<CartonTrackerLog>;
  latestTransaction?: Maybe<Transaction>;
  latestTransferLog?: Maybe<CartonTransferLog>;
  sku?: Maybe<Sku>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type CartonTrackerLog = {
  __typename?: 'CartonTrackerLog';
  carton?: Maybe<Carton>;
  createdAt?: Maybe<Scalars['Time']>;
  geoLocation?: Maybe<GeoLocation>;
  humidity?: Maybe<Scalars['NullFloat']>;
  id?: Maybe<Scalars['ID']>;
  temperature?: Maybe<Scalars['NullFloat']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type CartonTrackerLogsResult = {
  __typename?: 'CartonTrackerLogsResult';
  cartonTrackerLogs: Array<CartonTrackerLog>;
  total: Scalars['Int'];
};

export type CartonTransferLog = {
  __typename?: 'CartonTransferLog';
  carton?: Maybe<Carton>;
  createdAt?: Maybe<Scalars['Time']>;
  custodian?: Maybe<Organization>;
  id?: Maybe<Scalars['ID']>;
  owner?: Maybe<Organization>;
  updatedAt?: Maybe<Scalars['Time']>;
  warehouse?: Maybe<Warehouse>;
};

export type CartonTransferLogsResult = {
  __typename?: 'CartonTransferLogsResult';
  cartonTransferLogs: Array<CartonTransferLog>;
  total: Scalars['Int'];
};

export type CartonsResult = {
  __typename?: 'CartonsResult';
  cartons: Array<Carton>;
  total: Scalars['Int'];
};

export type Cell = {
  __typename?: 'Cell';
  code?: Maybe<Scalars['String']>;
  col?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['ID']>;
  isAllocated?: Maybe<Scalars['Boolean']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  isOccupied?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<Organization>;
  rack?: Maybe<Rack>;
  row?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Warehouse>;
};

export type CellsResult = {
  __typename?: 'CellsResult';
  cells: Array<Cell>;
  total: Scalars['Int'];
};

export type Contact = {
  __typename?: 'Contact';
  code?: Maybe<Scalars['String']>;
  companyUID?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  sector?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Time']>;
  website?: Maybe<Scalars['NullString']>;
};

export type ContactsResult = {
  __typename?: 'ContactsResult';
  contacts: Array<Contact>;
  total: Scalars['Int'];
};

export type Container = {
  __typename?: 'Container';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  latestTrackerLog?: Maybe<ContainerTrackerLog>;
  latestTransaction?: Maybe<Transaction>;
  latestTransferLog?: Maybe<ContainerTransferLog>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type ContainerTrackerLog = {
  __typename?: 'ContainerTrackerLog';
  container?: Maybe<Container>;
  createdAt?: Maybe<Scalars['Time']>;
  geoLocation?: Maybe<GeoLocation>;
  humidity?: Maybe<Scalars['NullFloat']>;
  id?: Maybe<Scalars['ID']>;
  temperature?: Maybe<Scalars['NullFloat']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type ContainerTrackerLogsResult = {
  __typename?: 'ContainerTrackerLogsResult';
  containerTrackerLogs: Array<ContainerTrackerLog>;
  total: Scalars['Int'];
};

export type ContainerTransferLog = {
  __typename?: 'ContainerTransferLog';
  container?: Maybe<Container>;
  createdAt?: Maybe<Scalars['Time']>;
  custodian?: Maybe<Organization>;
  id?: Maybe<Scalars['ID']>;
  owner?: Maybe<Organization>;
  updatedAt?: Maybe<Scalars['Time']>;
  warehouse?: Maybe<Warehouse>;
};

export type ContainerTransferLogsResult = {
  __typename?: 'ContainerTransferLogsResult';
  containerTransferLogs: Array<ContainerTransferLog>;
  total: Scalars['Int'];
};

export type ContainersResult = {
  __typename?: 'ContainersResult';
  containers: Array<Container>;
  total: Scalars['Int'];
};

export type Department = {
  __typename?: 'Department';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type DepartmentsResult = {
  __typename?: 'DepartmentsResult';
  departments: Array<Department>;
  total: Scalars['Int'];
};

export type File = {
  __typename?: 'File';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type FileInput = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export enum FilterOption {
  Accepted = 'Accepted',
  Active = 'Active',
  All = 'All',
  Archived = 'Archived',
  Draft = 'Draft'
}

export type GeoLocation = {
  __typename?: 'GeoLocation';
  lat?: Maybe<Scalars['NullFloat']>;
  lon?: Maybe<Scalars['NullFloat']>;
};

export type GeoLocationInput = {
  lat: Scalars['Float'];
  lon: Scalars['Float'];
};

export type LatestTransactionInfo = {
  __typename?: 'LatestTransactionInfo';
  createdAt?: Maybe<Scalars['Time']>;
  name?: Maybe<Scalars['String']>;
};

export type LoginRequest = {
  handle: Scalars['String'];
  otp: Scalars['String'];
};

export type Manifest = {
  __typename?: 'Manifest';
  id?: Maybe<Scalars['ID']>;
  merkleRootSha256?: Maybe<Scalars['NullString']>;
  transactionHash?: Maybe<Scalars['NullString']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  batchArchive: Batch;
  batchCatalogueArchive: BatchCatalogue;
  batchCatalogueCreate: BatchCatalogue;
  batchCatalogueFinalize: BatchCatalogue;
  batchCatalogueUnarchive: BatchCatalogue;
  batchCatalogueUpdate: BatchCatalogue;
  batchCreate: Batch;
  batchUnarchive: Batch;
  batchUpdate: Batch;
  cartonArchive: Carton;
  cartonTrackerLogUpdate: CartonTrackerLog;
  cartonTransferLogUpdate: CartonTransferLog;
  cartonUnarchive: Carton;
  cartonUpdate: Carton;
  cellArchive: Cell;
  cellCreate: Cell;
  cellFinalize: Cell;
  cellUnarchive: Cell;
  cellUpdate: Cell;
  changeDetails: User;
  contactArchive: Contact;
  contactCreate: Contact;
  contactFinalize: Contact;
  contactUnarchive: Contact;
  contactUpdate: Contact;
  containerArchive: Container;
  containerTrackerLogUpdate: ContainerTrackerLog;
  containerTransferLogUpdate: ContainerTransferLog;
  containerUnarchive: Container;
  containerUpdate: Container;
  departmentArchive: Department;
  departmentCreate: Department;
  departmentFinalize: Department;
  departmentUnarchive: Department;
  departmentUpdate: Department;
  deploySmartContract: Settings;
  fileUpload: File;
  fileUploadMultiple: Array<File>;
  flushPendingTransactions: Scalars['Boolean'];
  generateOTP?: Maybe<Scalars['String']>;
  login: Auther;
  organizationArchive: Organization;
  organizationRegister: Organization;
  organizationUnarchive: Organization;
  organizationUpdate: Organization;
  palletArchive: Pallet;
  palletTrackerLogUpdate: PalletTrackerLog;
  palletTransferLogUpdate: PalletTransferLog;
  palletUnarchive: Pallet;
  palletUpdate: Pallet;
  purchaseOrderArchive: PurchaseOrder;
  purchaseOrderCreate: PurchaseOrder;
  purchaseOrderFinalize: PurchaseOrder;
  purchaseOrderFinancierApprove: PurchaseOrder;
  purchaseOrderSellerAccept: PurchaseOrder;
  purchaseOrderUnarchive: PurchaseOrder;
  purchaseOrderUpdate: PurchaseOrder;
  qrOrderArchive: QrOrder;
  qrOrderCreate: QrOrder;
  qrOrderFinalize: QrOrder;
  qrOrderUnarchive: QrOrder;
  qrOrderUpdate: QrOrder;
  rackArchive: Rack;
  rackCreate: Rack;
  rackFinalize: Rack;
  rackTypeArchive: RackType;
  rackTypeCreate: RackType;
  rackTypeFinalize: RackType;
  rackTypeUnarchive: RackType;
  rackTypeUpdate: RackType;
  rackUnarchive: Rack;
  rackUpdate: Rack;
  resendEmailVerification: Scalars['Boolean'];
  roleArchive: Role;
  roleCreate: Role;
  roleFinalize: Role;
  roleUnarchive: Role;
  roleUpdate: Role;
  skuArchive: Sku;
  skuCatalogueArchive: SkuCatalogue;
  skuCatalogueCreate: SkuCatalogue;
  skuCatalogueFinalize: SkuCatalogue;
  skuCatalogueUnarchive: SkuCatalogue;
  skuCatalogueUpdate: SkuCatalogue;
  skuCreate: Sku;
  skuUnarchive: Sku;
  skuUpdate: Sku;
  superAdminCreate: User;
  userArchive: User;
  userCreate: User;
  userUnarchive: User;
  userUpdate: User;
  warehouseArchive: Warehouse;
  warehouseContractAccept: WarehouseContract;
  warehouseContractArchive: WarehouseContract;
  warehouseContractCreate: WarehouseContract;
  warehouseContractDecline: WarehouseContract;
  warehouseContractFinalize: WarehouseContract;
  warehouseContractUnarchive: WarehouseContract;
  warehouseContractUpdate: WarehouseContract;
  warehouseCreate: Warehouse;
  warehouseFinalize: Warehouse;
  warehouseTypeArchive: WarehouseType;
  warehouseTypeCreate: WarehouseType;
  warehouseTypeFinalize: WarehouseType;
  warehouseTypeUnarchive: WarehouseType;
  warehouseTypeUpdate: WarehouseType;
  warehouseUnarchive: Warehouse;
  warehouseUpdate: Warehouse;
};


export type MutationBatchArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationBatchCatalogueArchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationBatchCatalogueCreateArgs = {
  input: UpdateBatchCatalogue;
};


export type MutationBatchCatalogueFinalizeArgs = {
  uid: Scalars['UUID'];
};


export type MutationBatchCatalogueUnarchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationBatchCatalogueUpdateArgs = {
  input: UpdateBatchCatalogue;
  uid: Scalars['UUID'];
};


export type MutationBatchCreateArgs = {
  input: UpdateBatch;
};


export type MutationBatchUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationBatchUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateBatch;
};


export type MutationCartonArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationCartonTrackerLogUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateCartonTrackerLog;
};


export type MutationCartonTransferLogUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateCartonTransferLog;
};


export type MutationCartonUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationCartonUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateCarton;
};


export type MutationCellArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationCellCreateArgs = {
  input: UpdateCell;
};


export type MutationCellFinalizeArgs = {
  id: Scalars['ID'];
};


export type MutationCellUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationCellUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateCell;
};


export type MutationChangeDetailsArgs = {
  id: Scalars['ID'];
  input: UpdateUser;
};


export type MutationContactArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationContactCreateArgs = {
  input: UpdateContact;
};


export type MutationContactFinalizeArgs = {
  id: Scalars['ID'];
};


export type MutationContactUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationContactUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateContact;
};


export type MutationContainerArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationContainerTrackerLogUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateContainerTrackerLog;
};


export type MutationContainerTransferLogUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateContainerTransferLog;
};


export type MutationContainerUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationContainerUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateContainer;
};


export type MutationDepartmentArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationDepartmentCreateArgs = {
  input: UpdateDepartment;
};


export type MutationDepartmentFinalizeArgs = {
  id: Scalars['ID'];
};


export type MutationDepartmentUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationDepartmentUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateDepartment;
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationFileUploadMultipleArgs = {
  files: Array<Scalars['Upload']>;
};


export type MutationGenerateOtpArgs = {
  input: OtpRequest;
};


export type MutationLoginArgs = {
  input: LoginRequest;
};


export type MutationOrganizationArchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationOrganizationRegisterArgs = {
  input: RegisterOrganization;
};


export type MutationOrganizationUnarchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationOrganizationUpdateArgs = {
  input: UpdateOrganization;
  uid: Scalars['UUID'];
};


export type MutationPalletArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationPalletTrackerLogUpdateArgs = {
  id: Scalars['ID'];
  input: UpdatePalletTrackerLog;
};


export type MutationPalletTransferLogUpdateArgs = {
  id: Scalars['ID'];
  input: UpdatePalletTransferLog;
};


export type MutationPalletUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationPalletUpdateArgs = {
  id: Scalars['ID'];
  input: UpdatePallet;
};


export type MutationPurchaseOrderArchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationPurchaseOrderCreateArgs = {
  input: UpdatePurchaseOrder;
};


export type MutationPurchaseOrderFinalizeArgs = {
  uid: Scalars['UUID'];
};


export type MutationPurchaseOrderFinancierApproveArgs = {
  approval: Scalars['Boolean'];
  uid: Scalars['UUID'];
};


export type MutationPurchaseOrderSellerAcceptArgs = {
  acceptance: Scalars['Boolean'];
  uid: Scalars['UUID'];
};


export type MutationPurchaseOrderUnarchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationPurchaseOrderUpdateArgs = {
  input: UpdatePurchaseOrder;
  uid: Scalars['UUID'];
};


export type MutationQrOrderArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationQrOrderCreateArgs = {
  input: UpdateQrOrder;
};


export type MutationQrOrderFinalizeArgs = {
  id: Scalars['ID'];
};


export type MutationQrOrderUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationQrOrderUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateQrOrder;
};


export type MutationRackArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationRackCreateArgs = {
  input: UpdateRack;
};


export type MutationRackFinalizeArgs = {
  id: Scalars['ID'];
};


export type MutationRackTypeArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationRackTypeCreateArgs = {
  input: UpdateRackType;
};


export type MutationRackTypeFinalizeArgs = {
  id: Scalars['ID'];
};


export type MutationRackTypeUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationRackTypeUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateRackType;
};


export type MutationRackUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationRackUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateRack;
};


export type MutationResendEmailVerificationArgs = {
  email: Scalars['String'];
};


export type MutationRoleArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationRoleCreateArgs = {
  input: UpdateRole;
};


export type MutationRoleFinalizeArgs = {
  id: Scalars['ID'];
};


export type MutationRoleUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationRoleUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateRole;
};


export type MutationSkuArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationSkuCatalogueArchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationSkuCatalogueCreateArgs = {
  input: UpdateSkuCatalogue;
};


export type MutationSkuCatalogueFinalizeArgs = {
  uid: Scalars['UUID'];
};


export type MutationSkuCatalogueUnarchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationSkuCatalogueUpdateArgs = {
  input: UpdateSkuCatalogue;
  uid: Scalars['UUID'];
};


export type MutationSkuCreateArgs = {
  input: UpdateSku;
};


export type MutationSkuUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationSkuUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateSku;
};


export type MutationSuperAdminCreateArgs = {
  input: UpdateUser;
};


export type MutationUserArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationUserCreateArgs = {
  input: UpdateUser;
};


export type MutationUserUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateUser;
};


export type MutationWarehouseArchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationWarehouseContractAcceptArgs = {
  uid: Scalars['UUID'];
};


export type MutationWarehouseContractArchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationWarehouseContractCreateArgs = {
  input: UpdateWarehouseContract;
};


export type MutationWarehouseContractDeclineArgs = {
  uid: Scalars['UUID'];
};


export type MutationWarehouseContractFinalizeArgs = {
  uid: Scalars['UUID'];
};


export type MutationWarehouseContractUnarchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationWarehouseContractUpdateArgs = {
  input: UpdateWarehouseContract;
  uid: Scalars['UUID'];
};


export type MutationWarehouseCreateArgs = {
  input: UpdateWarehouse;
};


export type MutationWarehouseFinalizeArgs = {
  uid: Scalars['UUID'];
};


export type MutationWarehouseTypeArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationWarehouseTypeCreateArgs = {
  input: UpdateWarehouseType;
};


export type MutationWarehouseTypeFinalizeArgs = {
  id: Scalars['ID'];
};


export type MutationWarehouseTypeUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationWarehouseTypeUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateWarehouseType;
};


export type MutationWarehouseUnarchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationWarehouseUpdateArgs = {
  input: UpdateWarehouse;
  uid: Scalars['UUID'];
};

export type OtpRequest = {
  handle: Scalars['String'];
};

export enum ObjectType {
  Carton = 'CARTON',
  Container = 'CONTAINER',
  Pallet = 'PALLET'
}

export type Organization = {
  __typename?: 'Organization';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  website?: Maybe<Scalars['NullString']>;
};

export type OrganizationsResult = {
  __typename?: 'OrganizationsResult';
  organizations: Array<Organization>;
  total: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['ID'];
  startCursor: Scalars['ID'];
};

export type Pallet = {
  __typename?: 'Pallet';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  latestTrackerLog?: Maybe<PalletTrackerLog>;
  latestTransaction?: Maybe<Transaction>;
  latestTransferLog?: Maybe<PalletTransferLog>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type PalletTrackerLog = {
  __typename?: 'PalletTrackerLog';
  createdAt?: Maybe<Scalars['Time']>;
  geoLocation?: Maybe<GeoLocation>;
  humidity?: Maybe<Scalars['NullFloat']>;
  id?: Maybe<Scalars['ID']>;
  pallet?: Maybe<Pallet>;
  temperature?: Maybe<Scalars['NullFloat']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type PalletTrackerLogsResult = {
  __typename?: 'PalletTrackerLogsResult';
  palletTrackerLogs: Array<PalletTrackerLog>;
  total: Scalars['Int'];
};

export type PalletTransferLog = {
  __typename?: 'PalletTransferLog';
  createdAt?: Maybe<Scalars['Time']>;
  custodian?: Maybe<Organization>;
  id?: Maybe<Scalars['ID']>;
  owner?: Maybe<Organization>;
  pallet?: Maybe<Pallet>;
  updatedAt?: Maybe<Scalars['Time']>;
  warehouse?: Maybe<Warehouse>;
};

export type PalletTransferLogsResult = {
  __typename?: 'PalletTransferLogsResult';
  palletTransferLogs: Array<PalletTransferLog>;
  total: Scalars['Int'];
};

export type PalletsResult = {
  __typename?: 'PalletsResult';
  pallets: Array<Pallet>;
  total: Scalars['Int'];
};

export type PurchaseOrder = {
  __typename?: 'PurchaseOrder';
  buyer?: Maybe<Organization>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  details?: Maybe<PurchaseOrderDetail>;
  financier?: Maybe<Organization>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<PurchaseOrderItem>>;
  seller?: Maybe<Organization>;
  totalValue?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['UUID']>;
};

export type PurchaseOrderDetail = {
  __typename?: 'PurchaseOrderDetail';
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['NullString']>;
  addressLine3?: Maybe<Scalars['NullString']>;
  buyerMessage?: Maybe<Scalars['NullString']>;
  city?: Maybe<Scalars['String']>;
  contractTerms?: Maybe<Array<Scalars['String']>>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  currency?: Maybe<Scalars['String']>;
  documentStatus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  incoterm?: Maybe<Scalars['String']>;
  isFinanceirApproved?: Maybe<Scalars['NullBool']>;
  isSellerAccepted?: Maybe<Scalars['NullBool']>;
  notes?: Maybe<Scalars['NullString']>;
  pincode?: Maybe<Scalars['String']>;
  purchaseOrderUID?: Maybe<Scalars['UUID']>;
  requitionerUID?: Maybe<Scalars['NullUUID']>;
  sellerMessage?: Maybe<Scalars['NullString']>;
  shippingMethod?: Maybe<Scalars['String']>;
  shippingTerms?: Maybe<Array<Scalars['String']>>;
  updatedAt?: Maybe<Scalars['Time']>;
  version?: Maybe<Scalars['Int']>;
  warehouseUID?: Maybe<Scalars['NullUUID']>;
};

export type PurchaseOrderItem = {
  __typename?: 'PurchaseOrderItem';
  id?: Maybe<Scalars['ID']>;
  purchaseOrderUID?: Maybe<Scalars['UUID']>;
  serial?: Maybe<Scalars['Int']>;
  sku?: Maybe<SkuCatalogue>;
  unitCost?: Maybe<Scalars['Float']>;
  unitOfMeasure?: Maybe<Scalars['String']>;
  units?: Maybe<Scalars['Int']>;
};

export type PurchaseOrdersResult = {
  __typename?: 'PurchaseOrdersResult';
  purchaseOrders: Array<PurchaseOrder>;
  total: Scalars['Int'];
};

export type QrOrder = {
  __typename?: 'QROrder';
  batch?: Maybe<Batch>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  objectType?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Sku>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['Time']>;
  warehouse?: Maybe<Warehouse>;
};

export type QrOrderObject = {
  __typename?: 'QROrderObject';
  id?: Maybe<Scalars['ID']>;
  objectUID?: Maybe<Scalars['UUID']>;
  qrOrderUID?: Maybe<Scalars['UUID']>;
};

export type QrOrderObjectsResult = {
  __typename?: 'QROrderObjectsResult';
  qrOrderObjects: Array<QrOrderObject>;
  total: Scalars['Int'];
};

export type QrOrdersResult = {
  __typename?: 'QROrdersResult';
  qrOrders: Array<QrOrder>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  auther: Auther;
  batch: Batch;
  batchCatalogue: BatchCatalogue;
  batchCatalogues: BatchCataloguesResult;
  batches: BatchResult;
  carton: Carton;
  cartonTrackerLog: CartonTrackerLog;
  cartonTrackerLogs: CartonTrackerLogsResult;
  cartonTransferLog: CartonTransferLog;
  cartonTransferLogs: CartonTransferLogsResult;
  cartons: CartonsResult;
  cell: Cell;
  cells: CellsResult;
  contact: Contact;
  contacts: ContactsResult;
  container: Container;
  containerTrackerLog: ContainerTrackerLog;
  containerTrackerLogs: ContainerTrackerLogsResult;
  containerTransferLog: ContainerTransferLog;
  containerTransferLogs: ContainerTransferLogsResult;
  containers: ContainersResult;
  department: Department;
  departments: DepartmentsResult;
  ethereumAccountAddress: Scalars['String'];
  ethereumAccountBalance: Scalars['String'];
  getTickerInfo: TickerInfo;
  latestCartonTrackerLog: CartonTrackerLog;
  latestCartonTransferLog: CartonTransferLog;
  latestContainerTrackerLog: ContainerTrackerLog;
  latestContainerTransferLog: ContainerTransferLog;
  latestPalletTrackerLog: PalletTrackerLog;
  latestPalletTransferLog: PalletTransferLog;
  me: User;
  nexportBatchCatalogues: BatchCataloguesResult;
  nexportOrganizations: OrganizationsResult;
  nexportSkuCatalogues: SkuCataloguesResult;
  organization: Organization;
  organizations: OrganizationsResult;
  pallet: Pallet;
  palletTrackerLog: PalletTrackerLog;
  palletTrackerLogs: PalletTrackerLogsResult;
  palletTransferLog: PalletTransferLog;
  palletTransferLogs: PalletTransferLogsResult;
  pallets: PalletsResult;
  pendingTransactionsCount: Scalars['Int'];
  purchaseOrder: PurchaseOrder;
  purchaseOrders: PurchaseOrdersResult;
  qrOrder: QrOrder;
  qrOrderObjects: QrOrderObjectsResult;
  qrOrders: QrOrdersResult;
  rack: Rack;
  rackType: RackType;
  rackTypes: RackTypesResult;
  racks: RacksResult;
  role: Role;
  roles: RolesResult;
  settings: Settings;
  sku: Sku;
  skuCatalogue: SkuCatalogue;
  skuCatalogues: SkuCataloguesResult;
  skus: SkusResult;
  transactions: TransactionsResult;
  user: User;
  userActivities: UserActivitiesResult;
  userActivity: UserActivity;
  users: UserResult;
  warehouse: Warehouse;
  warehouseContract: WarehouseContract;
  warehouseContracts: WarehouseContractsResult;
  warehouseType: WarehouseType;
  warehouseTypes: WarehouseTypesResult;
  warehouses: WarehousesResult;
};


export type QueryBatchArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryBatchCatalogueArgs = {
  code?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryBatchCataloguesArgs = {
  search: SearchFilter;
  skuUID?: InputMaybe<Scalars['UUID']>;
};


export type QueryBatchesArgs = {
  search: SearchFilter;
  skuID?: InputMaybe<Scalars['ID']>;
};


export type QueryCartonArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryCartonTrackerLogArgs = {
  id: Scalars['ID'];
};


export type QueryCartonTrackerLogsArgs = {
  cartonUID: Scalars['UUID'];
  search: SearchFilter;
};


export type QueryCartonTransferLogArgs = {
  id: Scalars['ID'];
};


export type QueryCartonTransferLogsArgs = {
  cartonUID: Scalars['UUID'];
  search: SearchFilter;
};


export type QueryCartonsArgs = {
  batchUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
  skuUID?: InputMaybe<Scalars['UUID']>;
};


export type QueryCellArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCellsArgs = {
  rackID?: InputMaybe<Scalars['ID']>;
  search: SearchFilter;
};


export type QueryContactArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContactsArgs = {
  search: SearchFilter;
};


export type QueryContainerArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryContainerTrackerLogArgs = {
  id: Scalars['ID'];
};


export type QueryContainerTrackerLogsArgs = {
  containerUID: Scalars['UUID'];
  search: SearchFilter;
};


export type QueryContainerTransferLogArgs = {
  id: Scalars['ID'];
};


export type QueryContainerTransferLogsArgs = {
  containerUID: Scalars['UUID'];
  search: SearchFilter;
};


export type QueryContainersArgs = {
  search: SearchFilter;
};


export type QueryDepartmentArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentsArgs = {
  search: SearchFilter;
};


export type QueryLatestCartonTrackerLogArgs = {
  cartonUID: Scalars['UUID'];
};


export type QueryLatestCartonTransferLogArgs = {
  cartonUID: Scalars['UUID'];
};


export type QueryLatestContainerTrackerLogArgs = {
  containerUID: Scalars['UUID'];
};


export type QueryLatestContainerTransferLogArgs = {
  containerUID: Scalars['UUID'];
};


export type QueryLatestPalletTrackerLogArgs = {
  palletUID: Scalars['UUID'];
};


export type QueryLatestPalletTransferLogArgs = {
  palletUID: Scalars['UUID'];
};


export type QueryNexportBatchCataloguesArgs = {
  search: SearchFilter;
  skuUID?: InputMaybe<Scalars['UUID']>;
};


export type QueryNexportOrganizationsArgs = {
  search: SearchFilter;
  sector?: InputMaybe<Scalars['String']>;
};


export type QueryNexportSkuCataloguesArgs = {
  search: SearchFilter;
};


export type QueryOrganizationArgs = {
  code?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryOrganizationsArgs = {
  search: SearchFilter;
  sector?: InputMaybe<Scalars['String']>;
};


export type QueryPalletArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryPalletTrackerLogArgs = {
  id: Scalars['ID'];
};


export type QueryPalletTrackerLogsArgs = {
  palletUID: Scalars['UUID'];
  search: SearchFilter;
};


export type QueryPalletTransferLogArgs = {
  id: Scalars['ID'];
};


export type QueryPalletTransferLogsArgs = {
  palletUID: Scalars['UUID'];
  search: SearchFilter;
};


export type QueryPalletsArgs = {
  search: SearchFilter;
};


export type QueryPurchaseOrderArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryPurchaseOrdersArgs = {
  search: SearchFilter;
  view?: InputMaybe<ViewOption>;
};


export type QueryQrOrderArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryQrOrderObjectsArgs = {
  qrOrderUID: Scalars['UUID'];
  search: SearchFilter;
};


export type QueryQrOrdersArgs = {
  objectType?: InputMaybe<Scalars['String']>;
  search: SearchFilter;
};


export type QueryRackArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRackTypeArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRackTypesArgs = {
  search: SearchFilter;
};


export type QueryRacksArgs = {
  search: SearchFilter;
  typeID?: InputMaybe<Scalars['ID']>;
};


export type QueryRoleArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRolesArgs = {
  deptID?: InputMaybe<Scalars['ID']>;
  search: SearchFilter;
};


export type QuerySkuArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QuerySkuCatalogueArgs = {
  code?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QuerySkuCataloguesArgs = {
  search: SearchFilter;
};


export type QuerySkusArgs = {
  search: SearchFilter;
};


export type QueryTransactionsArgs = {
  objectUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
};


export type QueryUserArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserActivitiesArgs = {
  search: SearchFilter;
  userID?: InputMaybe<Scalars['ID']>;
};


export type QueryUserActivityArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  roleID?: InputMaybe<Scalars['ID']>;
  search: SearchFilter;
};


export type QueryWarehouseArgs = {
  code?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryWarehouseContractArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryWarehouseContractsArgs = {
  clientUID?: InputMaybe<Scalars['UUID']>;
  contractorUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
  view?: InputMaybe<ViewOption>;
  warehouseUID?: InputMaybe<Scalars['UUID']>;
};


export type QueryWarehouseTypeArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWarehouseTypesArgs = {
  search: SearchFilter;
};


export type QueryWarehousesArgs = {
  isThirdParty?: InputMaybe<Scalars['Boolean']>;
  search: SearchFilter;
  typeID?: InputMaybe<Scalars['ID']>;
};

export type Rack = {
  __typename?: 'Rack';
  code?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Time']>;
  dimension?: Maybe<StorageDimension>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<Organization>;
  rows?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<RackType>;
  warehouse?: Maybe<Warehouse>;
};

export type RackType = {
  __typename?: 'RackType';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  status?: Maybe<Scalars['String']>;
  storageDimension?: Maybe<StorageDimension>;
  storageType?: Maybe<Scalars['String']>;
};

export type RackTypesResult = {
  __typename?: 'RackTypesResult';
  rackTypes: Array<RackType>;
  total: Scalars['Int'];
};

export type RacksResult = {
  __typename?: 'RacksResult';
  racks: Array<Rack>;
  total: Scalars['Int'];
};

export type RegisterOrganization = {
  email?: InputMaybe<Scalars['NullString']>;
  firstName?: InputMaybe<Scalars['NullString']>;
  lastName?: InputMaybe<Scalars['NullString']>;
  logo?: InputMaybe<FileInput>;
  orgName?: InputMaybe<Scalars['NullString']>;
  phone?: InputMaybe<Scalars['NullString']>;
  sector?: InputMaybe<Scalars['NullString']>;
  website?: InputMaybe<Scalars['NullString']>;
};

export type RequestToken = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  department?: Maybe<Department>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  isManagement?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  permissions?: Maybe<Array<Scalars['String']>>;
};

export type RolesResult = {
  __typename?: 'RolesResult';
  roles: Array<Role>;
  total: Scalars['Int'];
};

export type SearchFilter = {
  filter?: InputMaybe<FilterOption>;
  limit?: InputMaybe<Scalars['NullInt']>;
  offset?: InputMaybe<Scalars['NullInt']>;
  orgUID?: InputMaybe<Scalars['UUID']>;
  search?: InputMaybe<Scalars['NullString']>;
  sortBy?: InputMaybe<SortByOption>;
  sortDir?: InputMaybe<SortDir>;
  warehouseUID?: InputMaybe<Scalars['UUID']>;
};

export type Settings = {
  __typename?: 'Settings';
  adminHost: Scalars['String'];
  consumerHost: Scalars['String'];
  etherscanHost: Scalars['String'];
  fieldappVersion: Scalars['String'];
  smartContractAddress: Scalars['String'];
};

export type Sku = {
  __typename?: 'Sku';
  batchCount?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
  cartonCount?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  description?: Maybe<Scalars['String']>;
  hsnCode?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  ingredients?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  isParent?: Maybe<Scalars['Boolean']>;
  masterPhoto?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  parentSkuUID?: Maybe<Scalars['NullUUID']>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  weight?: Maybe<Scalars['Float']>;
  weightUnit?: Maybe<Scalars['String']>;
};

export type SkuCatalogue = {
  __typename?: 'SkuCatalogue';
  batchCount?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  description?: Maybe<Scalars['String']>;
  hsnCode?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  ingredients?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  isParent?: Maybe<Scalars['Boolean']>;
  masterPhoto?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  parentSkuUID?: Maybe<Scalars['NullUUID']>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  weight?: Maybe<Scalars['Float']>;
  weightUnit?: Maybe<Scalars['String']>;
};

export type SkuCataloguesResult = {
  __typename?: 'SkuCataloguesResult';
  skuCatalogues: Array<SkuCatalogue>;
  total: Scalars['Int'];
};

export type SkusResult = {
  __typename?: 'SkusResult';
  skus: Array<Sku>;
  total: Scalars['Int'];
};

export enum SortByOption {
  Alphabetical = 'Alphabetical',
  DateCreated = 'DateCreated',
  DateUpdated = 'DateUpdated'
}

export enum SortDir {
  Ascending = 'Ascending',
  Descending = 'Descending'
}

export type StorageDimension = {
  __typename?: 'StorageDimension';
  breadth?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type StorageDimensionInput = {
  breadth: Scalars['Float'];
  height: Scalars['Float'];
  length: Scalars['Float'];
  unit: Scalars['String'];
};

export type TickerInfo = {
  __typename?: 'TickerInfo';
  lastTick: Scalars['Time'];
  tickInterval: Scalars['Int'];
};

export type Transaction = {
  __typename?: 'Transaction';
  carton?: Maybe<Carton>;
  createdAt?: Maybe<Scalars['Time']>;
  creator?: Maybe<User>;
  geoLocation?: Maybe<GeoLocation>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  isPending?: Maybe<Scalars['Boolean']>;
  manifest?: Maybe<Manifest>;
  manifestLineJson?: Maybe<Scalars['NullString']>;
  manifestLineSha256?: Maybe<Scalars['NullString']>;
  memo?: Maybe<Scalars['NullString']>;
  name?: Maybe<Scalars['String']>;
  objectPhoto?: Maybe<File>;
  objectType?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  pallet?: Maybe<Pallet>;
  scannedAt?: Maybe<Scalars['NullTime']>;
  transactionHash?: Maybe<Scalars['NullString']>;
  uid?: Maybe<Scalars['UUID']>;
};

export type TransactionsResult = {
  __typename?: 'TransactionsResult';
  total: Scalars['Int'];
  transactions: Array<Transaction>;
};

export type UpdateBatch = {
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  uid?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateBatchCatalogue = {
  batchNumber?: InputMaybe<Scalars['NullString']>;
  description?: InputMaybe<Scalars['NullString']>;
  expiryDate?: InputMaybe<Scalars['NullTime']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  productionDate?: InputMaybe<Scalars['NullTime']>;
  skuUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
};

export type UpdateCarton = {
  custodianUID?: InputMaybe<Scalars['NullUUID']>;
  description?: InputMaybe<Scalars['NullString']>;
  geoLocation?: InputMaybe<GeoLocationInput>;
  humidity?: InputMaybe<Scalars['NullFloat']>;
  ownerUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
  temperature?: InputMaybe<Scalars['NullFloat']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateCartonTrackerLog = {
  humidity?: InputMaybe<Scalars['NullFloat']>;
  lat?: InputMaybe<Scalars['NullFloat']>;
  lon?: InputMaybe<Scalars['NullFloat']>;
  temprature?: InputMaybe<Scalars['NullFloat']>;
};

export type UpdateCartonTransferLog = {
  custodianUID?: InputMaybe<Scalars['NullUUID']>;
  ownerUID?: InputMaybe<Scalars['NullUUID']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateCell = {
  col?: InputMaybe<Scalars['NullInt']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  rackID?: InputMaybe<Scalars['NullInt64']>;
  row?: InputMaybe<Scalars['NullInt']>;
  status?: InputMaybe<Scalars['NullString']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateContact = {
  companyUID?: InputMaybe<Scalars['NullUUID']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  sector?: InputMaybe<Scalars['NullString']>;
  status?: InputMaybe<Scalars['NullString']>;
};

export type UpdateContainer = {
  custodianUID?: InputMaybe<Scalars['NullUUID']>;
  description?: InputMaybe<Scalars['NullString']>;
  geoLocation?: InputMaybe<GeoLocationInput>;
  humidity?: InputMaybe<Scalars['NullFloat']>;
  ownerUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
  temperature?: InputMaybe<Scalars['NullFloat']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateContainerTrackerLog = {
  humidity?: InputMaybe<Scalars['NullFloat']>;
  lat?: InputMaybe<Scalars['NullFloat']>;
  lon?: InputMaybe<Scalars['NullFloat']>;
  temprature?: InputMaybe<Scalars['NullFloat']>;
};

export type UpdateContainerTransferLog = {
  custodianUID?: InputMaybe<Scalars['NullUUID']>;
  ownerUID?: InputMaybe<Scalars['NullUUID']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateDepartment = {
  name?: InputMaybe<Scalars['NullString']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateOrganization = {
  logo?: InputMaybe<FileInput>;
  name?: InputMaybe<Scalars['NullString']>;
  sector?: InputMaybe<Scalars['NullString']>;
  website?: InputMaybe<Scalars['NullString']>;
};

export type UpdatePallet = {
  custodianUID?: InputMaybe<Scalars['NullUUID']>;
  description?: InputMaybe<Scalars['NullString']>;
  geoLocation?: InputMaybe<GeoLocationInput>;
  humidity?: InputMaybe<Scalars['NullFloat']>;
  ownerUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
  temperature?: InputMaybe<Scalars['NullFloat']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdatePalletTrackerLog = {
  humidity?: InputMaybe<Scalars['NullFloat']>;
  lat?: InputMaybe<Scalars['NullFloat']>;
  lon?: InputMaybe<Scalars['NullFloat']>;
  temprature?: InputMaybe<Scalars['NullFloat']>;
};

export type UpdatePalletTransferLog = {
  custodianUID?: InputMaybe<Scalars['NullUUID']>;
  ownerUID?: InputMaybe<Scalars['NullUUID']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdatePurchaseOrder = {
  buyerUID?: InputMaybe<Scalars['NullUUID']>;
  details?: InputMaybe<UpdatePurchaseOrderDetail>;
  financierUID?: InputMaybe<Scalars['NullUUID']>;
  items?: InputMaybe<Array<UpdatePurchaseOrderItem>>;
  sellerUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdatePurchaseOrderDetail = {
  addressLine1?: InputMaybe<Scalars['NullString']>;
  addressLine2?: InputMaybe<Scalars['NullString']>;
  addressLine3?: InputMaybe<Scalars['NullString']>;
  buyerMessage?: InputMaybe<Scalars['NullString']>;
  city?: InputMaybe<Scalars['NullString']>;
  contractTerms?: InputMaybe<Array<Scalars['String']>>;
  country?: InputMaybe<Scalars['NullString']>;
  currency?: InputMaybe<Scalars['NullString']>;
  incoterm?: InputMaybe<Scalars['NullString']>;
  notes?: InputMaybe<Scalars['NullString']>;
  pincode?: InputMaybe<Scalars['NullString']>;
  sellerMessage?: InputMaybe<Scalars['NullString']>;
  shippingMethod?: InputMaybe<Scalars['NullString']>;
  shippingTerms?: InputMaybe<Array<Scalars['String']>>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdatePurchaseOrderItem = {
  skuUID?: InputMaybe<Scalars['NullUUID']>;
  unitCost?: InputMaybe<Scalars['NullFloat']>;
  unitOfMeasure?: InputMaybe<Scalars['NullString']>;
  units?: InputMaybe<Scalars['NullInt']>;
};

export type UpdateQrOrder = {
  batchUID?: InputMaybe<Scalars['NullUUID']>;
  description?: InputMaybe<Scalars['NullString']>;
  objectType?: InputMaybe<ObjectType>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  quantity?: InputMaybe<Scalars['NullInt']>;
  skuUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateRack = {
  columns?: InputMaybe<Scalars['NullInt']>;
  dimension?: InputMaybe<StorageDimensionInput>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  rows?: InputMaybe<Scalars['NullInt']>;
  status?: InputMaybe<Scalars['NullString']>;
  typeID?: InputMaybe<Scalars['NullInt64']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateRackType = {
  StorageDimension?: InputMaybe<StorageDimensionInput>;
  name?: InputMaybe<Scalars['NullString']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
  storageType?: InputMaybe<Scalars['NullString']>;
};

export type UpdateRole = {
  departmentID?: InputMaybe<Scalars['NullInt64']>;
  isArchived?: InputMaybe<Scalars['NullBool']>;
  isManagement?: InputMaybe<Scalars['NullBool']>;
  name?: InputMaybe<Scalars['NullString']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  permissions?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateSku = {
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  uid?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateSkuCatalogue = {
  brand?: InputMaybe<Scalars['NullString']>;
  description?: InputMaybe<Scalars['NullString']>;
  hsnCode?: InputMaybe<Scalars['NullString']>;
  ingredients?: InputMaybe<Scalars['NullString']>;
  isParent?: InputMaybe<Scalars['NullBool']>;
  masterPhoto?: InputMaybe<FileInput>;
  name?: InputMaybe<Scalars['NullString']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  parentSkuUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
  weight?: InputMaybe<Scalars['NullFloat']>;
  weightUnit?: InputMaybe<Scalars['NullString']>;
};

export type UpdateUser = {
  email?: InputMaybe<Scalars['NullString']>;
  firstName?: InputMaybe<Scalars['NullString']>;
  lastName?: InputMaybe<Scalars['NullString']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  phone?: InputMaybe<Scalars['NullString']>;
  roleID?: InputMaybe<Scalars['NullInt64']>;
};

export type UpdateWarehouse = {
  city?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['NullString']>;
  dimension?: InputMaybe<WarehouseDimensionInput>;
  geoLocation?: InputMaybe<GeoLocationInput>;
  locality?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['NullString']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  pincode?: InputMaybe<Scalars['String']>;
  specifications?: InputMaybe<Array<WarehouseSpecificationInput>>;
  status?: InputMaybe<Scalars['NullString']>;
  typeID?: InputMaybe<Scalars['NullInt64']>;
};

export type UpdateWarehouseContract = {
  clientUID?: InputMaybe<Scalars['NullUUID']>;
  contractorUID?: InputMaybe<Scalars['NullUUID']>;
  message?: InputMaybe<Scalars['NullString']>;
  status?: InputMaybe<Scalars['NullString']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdateWarehouseType = {
  details?: InputMaybe<Scalars['NullString']>;
  name?: InputMaybe<Scalars['NullString']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Time']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type UserActivitiesResult = {
  __typename?: 'UserActivitiesResult';
  total: Scalars['Int'];
  userActivities: Array<UserActivity>;
};

export type UserActivity = {
  __typename?: 'UserActivity';
  action?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['ID']>;
  objectID?: Maybe<Scalars['NullInt64']>;
  objectType?: Maybe<Scalars['NullString']>;
  organization?: Maybe<Organization>;
  sessionToken?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['Time']>;
  user?: Maybe<User>;
};

export type UserResult = {
  __typename?: 'UserResult';
  total: Scalars['Int'];
  users: Array<User>;
};

export enum ViewOption {
  Admin = 'ADMIN',
  Buyer = 'BUYER',
  Client = 'CLIENT',
  Contractor = 'CONTRACTOR',
  Financier = 'FINANCIER',
  Operator = 'OPERATOR',
  Seller = 'SELLER'
}

export type Warehouse = {
  __typename?: 'Warehouse';
  Operator?: Maybe<Organization>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  details?: Maybe<Scalars['NullString']>;
  dimension?: Maybe<WarehouseDimension>;
  geoLocation?: Maybe<GeoLocation>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  locality?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  pincode?: Maybe<Scalars['String']>;
  specifications?: Maybe<Array<WarehouseSpecification>>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<WarehouseType>;
  uid?: Maybe<Scalars['UUID']>;
  warehouseUID?: Maybe<Scalars['UUID']>;
};

export type WarehouseAddress = {
  __typename?: 'WarehouseAddress';
  city?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  pincode?: Maybe<Scalars['String']>;
};

export type WarehouseContract = {
  __typename?: 'WarehouseContract';
  acceptanceStatus?: Maybe<Scalars['String']>;
  client?: Maybe<Organization>;
  code?: Maybe<Scalars['String']>;
  contractor?: Maybe<Organization>;
  createdAt?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['ID']>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['NullString']>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['UUID']>;
  warehouse?: Maybe<Warehouse>;
};

export type WarehouseContractsResult = {
  __typename?: 'WarehouseContractsResult';
  total: Scalars['Int'];
  warehouseContracts: Array<WarehouseContract>;
};

export type WarehouseDimension = {
  __typename?: 'WarehouseDimension';
  buildUpBreadth?: Maybe<Scalars['NullFloat']>;
  buildUpLength?: Maybe<Scalars['NullFloat']>;
  carpetBreadth?: Maybe<Scalars['NullFloat']>;
  carpetLength?: Maybe<Scalars['NullFloat']>;
  centralHeight?: Maybe<Scalars['NullFloat']>;
  wallHeight?: Maybe<Scalars['NullFloat']>;
};

export type WarehouseDimensionInput = {
  buildUpBreadth?: InputMaybe<Scalars['NullFloat']>;
  buildUpLength?: InputMaybe<Scalars['NullFloat']>;
  carpetBreadth?: InputMaybe<Scalars['NullFloat']>;
  carpetLength?: InputMaybe<Scalars['NullFloat']>;
  centralHeight?: InputMaybe<Scalars['NullFloat']>;
  wallHeight?: InputMaybe<Scalars['NullFloat']>;
};

export type WarehouseSpecification = {
  __typename?: 'WarehouseSpecification';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WarehouseSpecificationInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type WarehouseType = {
  __typename?: 'WarehouseType';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  details?: Maybe<Scalars['NullString']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  status?: Maybe<Scalars['String']>;
};

export type WarehouseTypesResult = {
  __typename?: 'WarehouseTypesResult';
  total: Scalars['Int'];
  warehouseTypes: Array<WarehouseType>;
};

export type WarehousesResult = {
  __typename?: 'WarehousesResult';
  total: Scalars['Int'];
  warehouses: Array<Warehouse>;
};

export type AutherQueryVariables = Exact<{ [key: string]: never; }>;


export type AutherQuery = { __typename?: 'Query', auther: { __typename?: 'Auther', id?: string | null, name?: string | null, isAdmin?: boolean | null, orgUID?: any | null } };

export type GenerateOtpMutationVariables = Exact<{
  input: OtpRequest;
}>;


export type GenerateOtpMutation = { __typename?: 'Mutation', generateOTP?: string | null };

export type LoginMutationVariables = Exact<{
  input: LoginRequest;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auther', id?: string | null, isAdmin?: boolean | null, orgUID?: any | null, roleID?: any | null, sessionToken?: any | null } };

export type OrganizationRegisterMutationVariables = Exact<{
  input: RegisterOrganization;
}>;


export type OrganizationRegisterMutation = { __typename?: 'Mutation', organizationRegister: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, status?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null } };

export type BatchCataloguesQueryVariables = Exact<{
  searchFilter: SearchFilter;
  skuUID?: InputMaybe<Scalars['UUID']>;
}>;


export type BatchCataloguesQuery = { __typename?: 'Query', batchCatalogues: { __typename?: 'BatchCataloguesResult', total: number, batchCatalogues: Array<{ __typename?: 'BatchCatalogue', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'SkuCatalogue', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type BatchCatalogueQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type BatchCatalogueQuery = { __typename?: 'Query', batchCatalogue: { __typename?: 'BatchCatalogue', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'SkuCatalogue', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type BatchCatalogueCreateMutationVariables = Exact<{
  input: UpdateBatchCatalogue;
}>;


export type BatchCatalogueCreateMutation = { __typename?: 'Mutation', batchCatalogueCreate: { __typename?: 'BatchCatalogue', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'SkuCatalogue', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type BatchCatalogueUpdateMutationVariables = Exact<{
  uid: Scalars['UUID'];
  input: UpdateBatchCatalogue;
}>;


export type BatchCatalogueUpdateMutation = { __typename?: 'Mutation', batchCatalogueUpdate: { __typename?: 'BatchCatalogue', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'SkuCatalogue', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type BatchCatalogueFinalizeMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type BatchCatalogueFinalizeMutation = { __typename?: 'Mutation', batchCatalogueFinalize: { __typename?: 'BatchCatalogue', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'SkuCatalogue', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type BatchCatalogueArchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type BatchCatalogueArchiveMutation = { __typename?: 'Mutation', batchCatalogueArchive: { __typename?: 'BatchCatalogue', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'SkuCatalogue', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type BatchCatalogueUnarchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type BatchCatalogueUnarchiveMutation = { __typename?: 'Mutation', batchCatalogueUnarchive: { __typename?: 'BatchCatalogue', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'SkuCatalogue', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCataloguesQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type SkuCataloguesQuery = { __typename?: 'Query', skuCatalogues: { __typename?: 'SkuCataloguesResult', total: number, skuCatalogues: Array<{ __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type SkuCatalogueQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type SkuCatalogueQuery = { __typename?: 'Query', skuCatalogue: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCatalogueCreateMutationVariables = Exact<{
  input: UpdateSkuCatalogue;
}>;


export type SkuCatalogueCreateMutation = { __typename?: 'Mutation', skuCatalogueCreate: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCatalogueUpdateMutationVariables = Exact<{
  uid: Scalars['UUID'];
  input: UpdateSkuCatalogue;
}>;


export type SkuCatalogueUpdateMutation = { __typename?: 'Mutation', skuCatalogueUpdate: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCatalogueFinalizeMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type SkuCatalogueFinalizeMutation = { __typename?: 'Mutation', skuCatalogueFinalize: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCatalogueArchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type SkuCatalogueArchiveMutation = { __typename?: 'Mutation', skuCatalogueArchive: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCatalogueUnarchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type SkuCatalogueUnarchiveMutation = { __typename?: 'Mutation', skuCatalogueUnarchive: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ContactsQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type ContactsQuery = { __typename?: 'Query', contacts: { __typename?: 'ContactsResult', total: number, contacts: Array<{ __typename?: 'Contact', id?: string | null, code?: string | null, companyUID?: any | null, name?: string | null, website?: any | null, sector?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type ContactQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type ContactQuery = { __typename?: 'Query', contact: { __typename?: 'Contact', id?: string | null, code?: string | null, companyUID?: any | null, name?: string | null, website?: any | null, sector?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ContactCreateMutationVariables = Exact<{
  input: UpdateContact;
}>;


export type ContactCreateMutation = { __typename?: 'Mutation', contactCreate: { __typename?: 'Contact', id?: string | null, code?: string | null, companyUID?: any | null, name?: string | null, website?: any | null, sector?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ContactUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateContact;
}>;


export type ContactUpdateMutation = { __typename?: 'Mutation', contactUpdate: { __typename?: 'Contact', id?: string | null, code?: string | null, companyUID?: any | null, name?: string | null, website?: any | null, sector?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ContactFinalizeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ContactFinalizeMutation = { __typename?: 'Mutation', contactFinalize: { __typename?: 'Contact', id?: string | null, code?: string | null, companyUID?: any | null, name?: string | null, website?: any | null, sector?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ContactArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ContactArchiveMutation = { __typename?: 'Mutation', contactArchive: { __typename?: 'Contact', id?: string | null, code?: string | null, companyUID?: any | null, name?: string | null, website?: any | null, sector?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ContactUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ContactUnarchiveMutation = { __typename?: 'Mutation', contactUnarchive: { __typename?: 'Contact', id?: string | null, code?: string | null, companyUID?: any | null, name?: string | null, website?: any | null, sector?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type DepartmentsQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type DepartmentsQuery = { __typename?: 'Query', departments: { __typename?: 'DepartmentsResult', total: number, departments: Array<{ __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type DepartmentQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type DepartmentQuery = { __typename?: 'Query', department: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type DepartmentCreateMutationVariables = Exact<{
  input: UpdateDepartment;
}>;


export type DepartmentCreateMutation = { __typename?: 'Mutation', departmentCreate: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type DepartmentUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateDepartment;
}>;


export type DepartmentUpdateMutation = { __typename?: 'Mutation', departmentUpdate: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type DepartmentFinalizeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DepartmentFinalizeMutation = { __typename?: 'Mutation', departmentFinalize: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type DepartmentArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DepartmentArchiveMutation = { __typename?: 'Mutation', departmentArchive: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type DepartmentUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DepartmentUnarchiveMutation = { __typename?: 'Mutation', departmentUnarchive: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type OrganizationsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  sector?: InputMaybe<Scalars['String']>;
}>;


export type OrganizationsQuery = { __typename?: 'Query', organizations: { __typename?: 'OrganizationsResult', total: number, organizations: Array<{ __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, status?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null }> } };

export type OrganizationQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type OrganizationQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, status?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null } };

export type OrganizationUpdateMutationVariables = Exact<{
  uid: Scalars['UUID'];
  input: UpdateOrganization;
}>;


export type OrganizationUpdateMutation = { __typename?: 'Mutation', organizationUpdate: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, status?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null } };

export type OrganizationArchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type OrganizationArchiveMutation = { __typename?: 'Mutation', organizationArchive: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, status?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null } };

export type OrganizationUnarchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type OrganizationUnarchiveMutation = { __typename?: 'Mutation', organizationUnarchive: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, status?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null } };

export type RolesQueryVariables = Exact<{
  searchFilter: SearchFilter;
  deptID?: InputMaybe<Scalars['ID']>;
}>;


export type RolesQuery = { __typename?: 'Query', roles: { __typename?: 'RolesResult', total: number, roles: Array<{ __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, permissions?: Array<string> | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, department?: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null } | null }> } };

export type RoleQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type RoleQuery = { __typename?: 'Query', role: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, permissions?: Array<string> | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, department?: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null } | null } };

export type RoleCreateMutationVariables = Exact<{
  input: UpdateRole;
}>;


export type RoleCreateMutation = { __typename?: 'Mutation', roleCreate: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, permissions?: Array<string> | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, department?: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null } | null } };

export type RoleUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateRole;
}>;


export type RoleUpdateMutation = { __typename?: 'Mutation', roleUpdate: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, permissions?: Array<string> | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, department?: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null } | null } };

export type RoleFinalizeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RoleFinalizeMutation = { __typename?: 'Mutation', roleFinalize: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, permissions?: Array<string> | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, department?: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null } | null } };

export type RoleArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RoleArchiveMutation = { __typename?: 'Mutation', roleArchive: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, permissions?: Array<string> | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, department?: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null } | null } };

export type RoleUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RoleUnarchiveMutation = { __typename?: 'Mutation', roleUnarchive: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, permissions?: Array<string> | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, department?: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null } | null } };

export type UsersQueryVariables = Exact<{
  searchFilter: SearchFilter;
  roleID?: InputMaybe<Scalars['ID']>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserResult', total: number, users: Array<{ __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, role?: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type UserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  handle?: InputMaybe<Scalars['String']>;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, role?: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type UserCreateMutationVariables = Exact<{
  input: UpdateUser;
}>;


export type UserCreateMutation = { __typename?: 'Mutation', userCreate: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, role?: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type UserUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateUser;
}>;


export type UserUpdateMutation = { __typename?: 'Mutation', userUpdate: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, role?: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type UserArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserArchiveMutation = { __typename?: 'Mutation', userArchive: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, role?: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type UserUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserUnarchiveMutation = { __typename?: 'Mutation', userUnarchive: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, role?: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type FileUploadMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type FileUploadMutation = { __typename?: 'Mutation', fileUpload: { __typename?: 'File', name: string, url: string } };

export type FileUploadMultipleMutationVariables = Exact<{
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type FileUploadMultipleMutation = { __typename?: 'Mutation', fileUploadMultiple: Array<{ __typename?: 'File', name: string, url: string }> };

export type SkuCatalogueFragmentFragment = { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type BatchCatalogueFragmentFragment = { __typename?: 'BatchCatalogue', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'SkuCatalogue', uid?: any | null, code?: string | null, name?: string | null } | null };

export type OrganizationFragmentFragment = { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, status?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null };

export type DepartmentFragmentFragment = { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type RoleFragmentFragment = { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, permissions?: Array<string> | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, department?: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null } | null };

export type UserFragmentFragment = { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, role?: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type ContactFragmentFragment = { __typename?: 'Contact', id?: string | null, code?: string | null, companyUID?: any | null, name?: string | null, website?: any | null, sector?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type AutherFragmentFragment = { __typename?: 'Auther', id?: string | null, isAdmin?: boolean | null, orgUID?: any | null, roleID?: any | null, sessionToken?: any | null };

export type SkuFragmentFragment = { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, cartonCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type BatchFragmentFragment = { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, cartonCount?: number | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type QrOrderFragmentFragment = { __typename?: 'QROrder', id?: string | null, uid?: any | null, code?: string | null, objectType?: string | null, description?: string | null, quantity?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null } | null };

export type QrOrderObjectFragmentFragment = { __typename?: 'QROrderObject', id?: string | null, qrOrderUID?: any | null, objectUID?: any | null };

export type CartonFragmentFragment = { __typename?: 'Carton', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'CartonTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'CartonTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', uid?: any | null, code?: string | null, batchNumber?: string | null } | null };

export type CartonTransferLogFragmentFragment = { __typename?: 'CartonTransferLog', id?: string | null, createdAt?: any | null, owner?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null };

export type CartonTrackerLogFragmentFragment = { __typename?: 'CartonTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, createdAt?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null };

export type ContainerFragmentFragment = { __typename?: 'Container', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'ContainerTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'ContainerTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null };

export type ContainerTransferLogFragmentFragment = { __typename?: 'ContainerTransferLog', id?: string | null, createdAt?: any | null, owner?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null };

export type ContainerTrackerLogFragmentFragment = { __typename?: 'ContainerTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, createdAt?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null };

export type PalletFragmentFragment = { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'PalletTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'PalletTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null };

export type PalletTransferLogFragmentFragment = { __typename?: 'PalletTransferLog', id?: string | null, createdAt?: any | null, owner?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null };

export type PalletTrackerLogFragmentFragment = { __typename?: 'PalletTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, createdAt?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null };

export type PurchaseOrderFragmentFragment = { __typename?: 'PurchaseOrder', id?: string | null, uid?: any | null, code?: string | null, totalValue?: number | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, buyer?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, seller?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, financier?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, details?: { __typename?: 'PurchaseOrderDetail', id?: string | null, purchaseOrderUID?: any | null, version?: number | null, warehouseUID?: any | null, requitionerUID?: any | null, currency?: string | null, addressLine1?: string | null, addressLine2?: any | null, addressLine3?: any | null, city?: string | null, country?: string | null, pincode?: string | null, shippingMethod?: string | null, incoterm?: string | null, notes?: any | null, buyerMessage?: any | null, sellerMessage?: any | null, shippingTerms?: Array<string> | null, contractTerms?: Array<string> | null, documentStatus?: string | null, isSellerAccepted?: any | null, isFinanceirApproved?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, items?: Array<{ __typename?: 'PurchaseOrderItem', id?: string | null, purchaseOrderUID?: any | null, serial?: number | null, units?: number | null, unitCost?: number | null, unitOfMeasure?: string | null, sku?: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null }> | null };

export type PurchaseOrderListFragmentFragment = { __typename?: 'PurchaseOrder', id?: string | null, uid?: any | null, code?: string | null, totalValue?: number | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, details?: { __typename?: 'PurchaseOrderDetail', currency?: string | null, documentStatus?: string | null } | null, buyer?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, seller?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, financier?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type TransactionFragmentFragment = { __typename?: 'Transaction', id?: string | null, uid?: any | null, name?: string | null, objectType?: string | null, scannedAt?: any | null, memo?: any | null, isPending?: boolean | null, manifestLineJson?: any | null, manifestLineSha256?: any | null, transactionHash?: any | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null, creator?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null } | null, organization?: { __typename?: 'Organization', id?: string | null, uid?: any | null, name?: string | null } | null, manifest?: { __typename?: 'Manifest', id?: string | null } | null, carton?: { __typename?: 'Carton', id?: string | null, uid?: any | null, code?: string | null } | null, pallet?: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null } | null };

export type WarehouseTypeFragmentFragment = { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type RackTypeFragmentFragment = { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null, storageType?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, storageDimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type WarehouseFragmentFragment = { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, warehouseUID?: any | null, name?: string | null, details?: any | null, locality?: string | null, city?: string | null, pincode?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: any | null, wallHeight?: any | null, carpetLength?: any | null, carpetBreadth?: any | null, buildUpLength?: any | null, buildUpBreadth?: any | null } | null, specifications?: Array<{ __typename?: 'WarehouseSpecification', key?: string | null, value?: string | null }> | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type RackFragmentFragment = { __typename?: 'Rack', id?: string | null, code?: string | null, rows?: number | null, columns?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, type?: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type CellFragmentFragment = { __typename?: 'Cell', id?: string | null, code?: string | null, row?: number | null, col?: number | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, rack?: { __typename?: 'Rack', id?: string | null, code?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type WarehouseContractFragmentFragment = { __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null };

export type BatchesQueryVariables = Exact<{
  searchFilter: SearchFilter;
  skuID?: InputMaybe<Scalars['ID']>;
}>;


export type BatchesQuery = { __typename?: 'Query', batches: { __typename?: 'BatchResult', total: number, batches: Array<{ __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, cartonCount?: number | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type BatchQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type BatchQuery = { __typename?: 'Query', batch: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, cartonCount?: number | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type BatchCreateMutationVariables = Exact<{
  input: UpdateBatch;
}>;


export type BatchCreateMutation = { __typename?: 'Mutation', batchCreate: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, cartonCount?: number | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type BatchUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateBatch;
}>;


export type BatchUpdateMutation = { __typename?: 'Mutation', batchUpdate: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, cartonCount?: number | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type BatchArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BatchArchiveMutation = { __typename?: 'Mutation', batchArchive: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, cartonCount?: number | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type BatchUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BatchUnarchiveMutation = { __typename?: 'Mutation', batchUnarchive: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, cartonCount?: number | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type CartonsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  skuUID?: InputMaybe<Scalars['UUID']>;
  batchUID?: InputMaybe<Scalars['UUID']>;
}>;


export type CartonsQuery = { __typename?: 'Query', cartons: { __typename?: 'CartonsResult', total: number, cartons: Array<{ __typename?: 'Carton', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'CartonTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'CartonTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', uid?: any | null, code?: string | null, batchNumber?: string | null } | null }> } };

export type CartonQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type CartonQuery = { __typename?: 'Query', carton: { __typename?: 'Carton', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'CartonTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'CartonTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', uid?: any | null, code?: string | null, batchNumber?: string | null } | null } };

export type CartonUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateCarton;
}>;


export type CartonUpdateMutation = { __typename?: 'Mutation', cartonUpdate: { __typename?: 'Carton', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'CartonTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'CartonTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', uid?: any | null, code?: string | null, batchNumber?: string | null } | null } };

export type CartonArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CartonArchiveMutation = { __typename?: 'Mutation', cartonArchive: { __typename?: 'Carton', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'CartonTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'CartonTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', uid?: any | null, code?: string | null, batchNumber?: string | null } | null } };

export type CartonUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CartonUnarchiveMutation = { __typename?: 'Mutation', cartonUnarchive: { __typename?: 'Carton', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'CartonTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'CartonTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null, sku?: { __typename?: 'Sku', uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', uid?: any | null, code?: string | null, batchNumber?: string | null } | null } };

export type CartonTransferLogsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  cartonUID: Scalars['UUID'];
}>;


export type CartonTransferLogsQuery = { __typename?: 'Query', cartonTransferLogs: { __typename?: 'CartonTransferLogsResult', total: number, cartonTransferLogs: Array<{ __typename?: 'CartonTransferLog', id?: string | null, createdAt?: any | null, owner?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type CartonTrackerLogsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  cartonUID: Scalars['UUID'];
}>;


export type CartonTrackerLogsQuery = { __typename?: 'Query', cartonTrackerLogs: { __typename?: 'CartonTrackerLogsResult', total: number, cartonTrackerLogs: Array<{ __typename?: 'CartonTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, createdAt?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null }> } };

export type ContainersQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type ContainersQuery = { __typename?: 'Query', containers: { __typename?: 'ContainersResult', total: number, containers: Array<{ __typename?: 'Container', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'ContainerTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'ContainerTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null }> } };

export type ContainerQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type ContainerQuery = { __typename?: 'Query', container: { __typename?: 'Container', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'ContainerTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'ContainerTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null } };

export type ContainerUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateContainer;
}>;


export type ContainerUpdateMutation = { __typename?: 'Mutation', containerUpdate: { __typename?: 'Container', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'ContainerTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'ContainerTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null } };

export type ContainerArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ContainerArchiveMutation = { __typename?: 'Mutation', containerArchive: { __typename?: 'Container', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'ContainerTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'ContainerTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null } };

export type ContainerUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ContainerUnarchiveMutation = { __typename?: 'Mutation', containerUnarchive: { __typename?: 'Container', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'ContainerTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'ContainerTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null } };

export type ContainerTransferLogsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  containerUID: Scalars['UUID'];
}>;


export type ContainerTransferLogsQuery = { __typename?: 'Query', containerTransferLogs: { __typename?: 'ContainerTransferLogsResult', total: number, containerTransferLogs: Array<{ __typename?: 'ContainerTransferLog', id?: string | null, createdAt?: any | null, owner?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type ContainerTrackerLogsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  containerUID: Scalars['UUID'];
}>;


export type ContainerTrackerLogsQuery = { __typename?: 'Query', containerTrackerLogs: { __typename?: 'ContainerTrackerLogsResult', total: number, containerTrackerLogs: Array<{ __typename?: 'ContainerTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, createdAt?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null }> } };

export type PalletsQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type PalletsQuery = { __typename?: 'Query', pallets: { __typename?: 'PalletsResult', total: number, pallets: Array<{ __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'PalletTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'PalletTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null }> } };

export type PalletQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type PalletQuery = { __typename?: 'Query', pallet: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'PalletTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'PalletTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null } };

export type PalletUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdatePallet;
}>;


export type PalletUpdateMutation = { __typename?: 'Mutation', palletUpdate: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'PalletTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'PalletTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null } };

export type PalletArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PalletArchiveMutation = { __typename?: 'Mutation', palletArchive: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'PalletTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'PalletTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null } };

export type PalletUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PalletUnarchiveMutation = { __typename?: 'Mutation', palletUnarchive: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, description?: string | null, status?: string | null, isArchived?: boolean | null, latestTransferLog?: { __typename?: 'PalletTransferLog', id?: string | null, owner?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, code?: string | null, name?: string | null } | null } | null, latestTrackerLog?: { __typename?: 'PalletTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null } | null, latestTransaction?: { __typename?: 'Transaction', name?: string | null, createdAt?: any | null } | null } };

export type PalletTransferLogsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  palletUID: Scalars['UUID'];
}>;


export type PalletTransferLogsQuery = { __typename?: 'Query', palletTransferLogs: { __typename?: 'PalletTransferLogsResult', total: number, palletTransferLogs: Array<{ __typename?: 'PalletTransferLog', id?: string | null, createdAt?: any | null, owner?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, custodian?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type PalletTrackerLogsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  palletUID: Scalars['UUID'];
}>;


export type PalletTrackerLogsQuery = { __typename?: 'Query', palletTrackerLogs: { __typename?: 'PalletTrackerLogsResult', total: number, palletTrackerLogs: Array<{ __typename?: 'PalletTrackerLog', id?: string | null, temperature?: any | null, humidity?: any | null, createdAt?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null }> } };

export type QrOrdersQueryVariables = Exact<{
  searchFilter: SearchFilter;
  objectType?: InputMaybe<Scalars['String']>;
}>;


export type QrOrdersQuery = { __typename?: 'Query', qrOrders: { __typename?: 'QROrdersResult', total: number, qrOrders: Array<{ __typename?: 'QROrder', id?: string | null, uid?: any | null, code?: string | null, objectType?: string | null, description?: string | null, quantity?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null } | null }> } };

export type QrOrderObjectsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  qrOrderUID: Scalars['UUID'];
}>;


export type QrOrderObjectsQuery = { __typename?: 'Query', qrOrderObjects: { __typename?: 'QROrderObjectsResult', total: number, qrOrderObjects: Array<{ __typename?: 'QROrderObject', id?: string | null, qrOrderUID?: any | null, objectUID?: any | null }> } };

export type QrOrderQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type QrOrderQuery = { __typename?: 'Query', qrOrder: { __typename?: 'QROrder', id?: string | null, uid?: any | null, code?: string | null, objectType?: string | null, description?: string | null, quantity?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null } | null } };

export type QrOrderCreateMutationVariables = Exact<{
  input: UpdateQrOrder;
}>;


export type QrOrderCreateMutation = { __typename?: 'Mutation', qrOrderCreate: { __typename?: 'QROrder', id?: string | null, uid?: any | null, code?: string | null, objectType?: string | null, description?: string | null, quantity?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null } | null } };

export type UpdateQrOrderUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateQrOrder;
}>;


export type UpdateQrOrderUpdateMutation = { __typename?: 'Mutation', qrOrderUpdate: { __typename?: 'QROrder', id?: string | null, uid?: any | null, code?: string | null, objectType?: string | null, description?: string | null, quantity?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null } | null } };

export type QrOrderFinalizeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type QrOrderFinalizeMutation = { __typename?: 'Mutation', qrOrderFinalize: { __typename?: 'QROrder', id?: string | null, uid?: any | null, code?: string | null, objectType?: string | null, description?: string | null, quantity?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null } | null } };

export type QrOrderArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type QrOrderArchiveMutation = { __typename?: 'Mutation', qrOrderArchive: { __typename?: 'QROrder', id?: string | null, uid?: any | null, code?: string | null, objectType?: string | null, description?: string | null, quantity?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null } | null } };

export type QrOrderUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type QrOrderUnarchiveMutation = { __typename?: 'Mutation', qrOrderUnarchive: { __typename?: 'QROrder', id?: string | null, uid?: any | null, code?: string | null, objectType?: string | null, description?: string | null, quantity?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null, batch?: { __typename?: 'Batch', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null } | null } };

export type SkusQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type SkusQuery = { __typename?: 'Query', skus: { __typename?: 'SkusResult', total: number, skus: Array<{ __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, cartonCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type SkuQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type SkuQuery = { __typename?: 'Query', sku: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, cartonCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCreateMutationVariables = Exact<{
  input: UpdateSku;
}>;


export type SkuCreateMutation = { __typename?: 'Mutation', skuCreate: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, cartonCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateSku;
}>;


export type SkuUpdateMutation = { __typename?: 'Mutation', skuUpdate: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, cartonCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SkuArchiveMutation = { __typename?: 'Mutation', skuArchive: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, cartonCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SkuUnarchiveMutation = { __typename?: 'Mutation', skuUnarchive: { __typename?: 'Sku', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, cartonCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type NexportOrganizationsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  sector?: InputMaybe<Scalars['String']>;
}>;


export type NexportOrganizationsQuery = { __typename?: 'Query', nexportOrganizations: { __typename?: 'OrganizationsResult', total: number, organizations: Array<{ __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, status?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null }> } };

export type NexportSkuCataloguesQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type NexportSkuCataloguesQuery = { __typename?: 'Query', nexportSkuCatalogues: { __typename?: 'SkuCataloguesResult', total: number, skuCatalogues: Array<{ __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, batchCount?: number | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type NexportBatchCataloguesQueryVariables = Exact<{
  searchFilter: SearchFilter;
  skuUID?: InputMaybe<Scalars['UUID']>;
}>;


export type NexportBatchCataloguesQuery = { __typename?: 'Query', nexportBatchCatalogues: { __typename?: 'BatchCataloguesResult', total: number, batchCatalogues: Array<{ __typename?: 'BatchCatalogue', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'SkuCatalogue', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type PurchaseOrdersQueryVariables = Exact<{
  searchFilter: SearchFilter;
  view?: InputMaybe<ViewOption>;
}>;


export type PurchaseOrdersQuery = { __typename?: 'Query', purchaseOrders: { __typename?: 'PurchaseOrdersResult', total: number, purchaseOrders: Array<{ __typename?: 'PurchaseOrder', id?: string | null, uid?: any | null, code?: string | null, totalValue?: number | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, details?: { __typename?: 'PurchaseOrderDetail', currency?: string | null, documentStatus?: string | null } | null, buyer?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, seller?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, financier?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type PurchaseOrderQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type PurchaseOrderQuery = { __typename?: 'Query', purchaseOrder: { __typename?: 'PurchaseOrder', id?: string | null, uid?: any | null, code?: string | null, totalValue?: number | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, buyer?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, seller?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, financier?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, details?: { __typename?: 'PurchaseOrderDetail', id?: string | null, purchaseOrderUID?: any | null, version?: number | null, warehouseUID?: any | null, requitionerUID?: any | null, currency?: string | null, addressLine1?: string | null, addressLine2?: any | null, addressLine3?: any | null, city?: string | null, country?: string | null, pincode?: string | null, shippingMethod?: string | null, incoterm?: string | null, notes?: any | null, buyerMessage?: any | null, sellerMessage?: any | null, shippingTerms?: Array<string> | null, contractTerms?: Array<string> | null, documentStatus?: string | null, isSellerAccepted?: any | null, isFinanceirApproved?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, items?: Array<{ __typename?: 'PurchaseOrderItem', id?: string | null, purchaseOrderUID?: any | null, serial?: number | null, units?: number | null, unitCost?: number | null, unitOfMeasure?: string | null, sku?: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null }> | null } };

export type PurchaseOrderCreateMutationVariables = Exact<{
  input: UpdatePurchaseOrder;
}>;


export type PurchaseOrderCreateMutation = { __typename?: 'Mutation', purchaseOrderCreate: { __typename?: 'PurchaseOrder', id?: string | null, uid?: any | null, code?: string | null, totalValue?: number | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, buyer?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, seller?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, financier?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, details?: { __typename?: 'PurchaseOrderDetail', id?: string | null, purchaseOrderUID?: any | null, version?: number | null, warehouseUID?: any | null, requitionerUID?: any | null, currency?: string | null, addressLine1?: string | null, addressLine2?: any | null, addressLine3?: any | null, city?: string | null, country?: string | null, pincode?: string | null, shippingMethod?: string | null, incoterm?: string | null, notes?: any | null, buyerMessage?: any | null, sellerMessage?: any | null, shippingTerms?: Array<string> | null, contractTerms?: Array<string> | null, documentStatus?: string | null, isSellerAccepted?: any | null, isFinanceirApproved?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, items?: Array<{ __typename?: 'PurchaseOrderItem', id?: string | null, purchaseOrderUID?: any | null, serial?: number | null, units?: number | null, unitCost?: number | null, unitOfMeasure?: string | null, sku?: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null }> | null } };

export type UpdatePurchaseOrderUpdateMutationVariables = Exact<{
  uid: Scalars['UUID'];
  input: UpdatePurchaseOrder;
}>;


export type UpdatePurchaseOrderUpdateMutation = { __typename?: 'Mutation', purchaseOrderUpdate: { __typename?: 'PurchaseOrder', id?: string | null, uid?: any | null, code?: string | null, totalValue?: number | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, buyer?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, seller?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, financier?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, details?: { __typename?: 'PurchaseOrderDetail', id?: string | null, purchaseOrderUID?: any | null, version?: number | null, warehouseUID?: any | null, requitionerUID?: any | null, currency?: string | null, addressLine1?: string | null, addressLine2?: any | null, addressLine3?: any | null, city?: string | null, country?: string | null, pincode?: string | null, shippingMethod?: string | null, incoterm?: string | null, notes?: any | null, buyerMessage?: any | null, sellerMessage?: any | null, shippingTerms?: Array<string> | null, contractTerms?: Array<string> | null, documentStatus?: string | null, isSellerAccepted?: any | null, isFinanceirApproved?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, items?: Array<{ __typename?: 'PurchaseOrderItem', id?: string | null, purchaseOrderUID?: any | null, serial?: number | null, units?: number | null, unitCost?: number | null, unitOfMeasure?: string | null, sku?: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null }> | null } };

export type PurchaseOrderFinalizeMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type PurchaseOrderFinalizeMutation = { __typename?: 'Mutation', purchaseOrderFinalize: { __typename?: 'PurchaseOrder', id?: string | null, uid?: any | null, code?: string | null, totalValue?: number | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, buyer?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, seller?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, financier?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, details?: { __typename?: 'PurchaseOrderDetail', id?: string | null, purchaseOrderUID?: any | null, version?: number | null, warehouseUID?: any | null, requitionerUID?: any | null, currency?: string | null, addressLine1?: string | null, addressLine2?: any | null, addressLine3?: any | null, city?: string | null, country?: string | null, pincode?: string | null, shippingMethod?: string | null, incoterm?: string | null, notes?: any | null, buyerMessage?: any | null, sellerMessage?: any | null, shippingTerms?: Array<string> | null, contractTerms?: Array<string> | null, documentStatus?: string | null, isSellerAccepted?: any | null, isFinanceirApproved?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, items?: Array<{ __typename?: 'PurchaseOrderItem', id?: string | null, purchaseOrderUID?: any | null, serial?: number | null, units?: number | null, unitCost?: number | null, unitOfMeasure?: string | null, sku?: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null }> | null } };

export type PurchaseOrderArchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type PurchaseOrderArchiveMutation = { __typename?: 'Mutation', purchaseOrderArchive: { __typename?: 'PurchaseOrder', id?: string | null, uid?: any | null, code?: string | null, totalValue?: number | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, buyer?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, seller?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, financier?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, details?: { __typename?: 'PurchaseOrderDetail', id?: string | null, purchaseOrderUID?: any | null, version?: number | null, warehouseUID?: any | null, requitionerUID?: any | null, currency?: string | null, addressLine1?: string | null, addressLine2?: any | null, addressLine3?: any | null, city?: string | null, country?: string | null, pincode?: string | null, shippingMethod?: string | null, incoterm?: string | null, notes?: any | null, buyerMessage?: any | null, sellerMessage?: any | null, shippingTerms?: Array<string> | null, contractTerms?: Array<string> | null, documentStatus?: string | null, isSellerAccepted?: any | null, isFinanceirApproved?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, items?: Array<{ __typename?: 'PurchaseOrderItem', id?: string | null, purchaseOrderUID?: any | null, serial?: number | null, units?: number | null, unitCost?: number | null, unitOfMeasure?: string | null, sku?: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null }> | null } };

export type PurchaseOrderUnarchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type PurchaseOrderUnarchiveMutation = { __typename?: 'Mutation', purchaseOrderUnarchive: { __typename?: 'PurchaseOrder', id?: string | null, uid?: any | null, code?: string | null, totalValue?: number | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, buyer?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, seller?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, financier?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, details?: { __typename?: 'PurchaseOrderDetail', id?: string | null, purchaseOrderUID?: any | null, version?: number | null, warehouseUID?: any | null, requitionerUID?: any | null, currency?: string | null, addressLine1?: string | null, addressLine2?: any | null, addressLine3?: any | null, city?: string | null, country?: string | null, pincode?: string | null, shippingMethod?: string | null, incoterm?: string | null, notes?: any | null, buyerMessage?: any | null, sellerMessage?: any | null, shippingTerms?: Array<string> | null, contractTerms?: Array<string> | null, documentStatus?: string | null, isSellerAccepted?: any | null, isFinanceirApproved?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, items?: Array<{ __typename?: 'PurchaseOrderItem', id?: string | null, purchaseOrderUID?: any | null, serial?: number | null, units?: number | null, unitCost?: number | null, unitOfMeasure?: string | null, sku?: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null } | null }> | null } };

export type TransactionsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  objectUID?: InputMaybe<Scalars['UUID']>;
}>;


export type TransactionsQuery = { __typename?: 'Query', transactions: { __typename?: 'TransactionsResult', total: number, transactions: Array<{ __typename?: 'Transaction', id?: string | null, uid?: any | null, name?: string | null, objectType?: string | null, scannedAt?: any | null, memo?: any | null, isPending?: boolean | null, manifestLineJson?: any | null, manifestLineSha256?: any | null, transactionHash?: any | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null, creator?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null } | null, organization?: { __typename?: 'Organization', id?: string | null, uid?: any | null, name?: string | null } | null, manifest?: { __typename?: 'Manifest', id?: string | null } | null, carton?: { __typename?: 'Carton', id?: string | null, uid?: any | null, code?: string | null } | null, pallet?: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null } | null }> } };

export type CellsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  rackID?: InputMaybe<Scalars['ID']>;
}>;


export type CellsQuery = { __typename?: 'Query', cells: { __typename?: 'CellsResult', total: number, cells: Array<{ __typename?: 'Cell', id?: string | null, code?: string | null, row?: number | null, col?: number | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, rack?: { __typename?: 'Rack', id?: string | null, code?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type CellQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type CellQuery = { __typename?: 'Query', cell: { __typename?: 'Cell', id?: string | null, code?: string | null, row?: number | null, col?: number | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, rack?: { __typename?: 'Rack', id?: string | null, code?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type CellCreateMutationVariables = Exact<{
  input: UpdateCell;
}>;


export type CellCreateMutation = { __typename?: 'Mutation', cellCreate: { __typename?: 'Cell', id?: string | null, code?: string | null, row?: number | null, col?: number | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, rack?: { __typename?: 'Rack', id?: string | null, code?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type CellUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateCell;
}>;


export type CellUpdateMutation = { __typename?: 'Mutation', cellUpdate: { __typename?: 'Cell', id?: string | null, code?: string | null, row?: number | null, col?: number | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, rack?: { __typename?: 'Rack', id?: string | null, code?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type CellFinalizeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CellFinalizeMutation = { __typename?: 'Mutation', cellFinalize: { __typename?: 'Cell', id?: string | null, code?: string | null, row?: number | null, col?: number | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, rack?: { __typename?: 'Rack', id?: string | null, code?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type CellArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CellArchiveMutation = { __typename?: 'Mutation', cellArchive: { __typename?: 'Cell', id?: string | null, code?: string | null, row?: number | null, col?: number | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, rack?: { __typename?: 'Rack', id?: string | null, code?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type CellUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CellUnarchiveMutation = { __typename?: 'Mutation', cellUnarchive: { __typename?: 'Cell', id?: string | null, code?: string | null, row?: number | null, col?: number | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, rack?: { __typename?: 'Rack', id?: string | null, code?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RacksQueryVariables = Exact<{
  searchFilter: SearchFilter;
  typeID?: InputMaybe<Scalars['ID']>;
}>;


export type RacksQuery = { __typename?: 'Query', racks: { __typename?: 'RacksResult', total: number, racks: Array<{ __typename?: 'Rack', id?: string | null, code?: string | null, rows?: number | null, columns?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, type?: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type RackQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type RackQuery = { __typename?: 'Query', rack: { __typename?: 'Rack', id?: string | null, code?: string | null, rows?: number | null, columns?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, type?: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackCreateMutationVariables = Exact<{
  input: UpdateRack;
}>;


export type RackCreateMutation = { __typename?: 'Mutation', rackCreate: { __typename?: 'Rack', id?: string | null, code?: string | null, rows?: number | null, columns?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, type?: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateRack;
}>;


export type RackUpdateMutation = { __typename?: 'Mutation', rackUpdate: { __typename?: 'Rack', id?: string | null, code?: string | null, rows?: number | null, columns?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, type?: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackFinalizeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RackFinalizeMutation = { __typename?: 'Mutation', rackFinalize: { __typename?: 'Rack', id?: string | null, code?: string | null, rows?: number | null, columns?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, type?: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RackArchiveMutation = { __typename?: 'Mutation', rackArchive: { __typename?: 'Rack', id?: string | null, code?: string | null, rows?: number | null, columns?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, type?: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RackUnarchiveMutation = { __typename?: 'Mutation', rackUnarchive: { __typename?: 'Rack', id?: string | null, code?: string | null, rows?: number | null, columns?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, type?: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackTypesQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type RackTypesQuery = { __typename?: 'Query', rackTypes: { __typename?: 'RackTypesResult', total: number, rackTypes: Array<{ __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null, storageType?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, storageDimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type RackTypeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type RackTypeQuery = { __typename?: 'Query', rackType: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null, storageType?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, storageDimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackTypeCreateMutationVariables = Exact<{
  input: UpdateRackType;
}>;


export type RackTypeCreateMutation = { __typename?: 'Mutation', rackTypeCreate: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null, storageType?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, storageDimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackTypeUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateRackType;
}>;


export type RackTypeUpdateMutation = { __typename?: 'Mutation', rackTypeUpdate: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null, storageType?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, storageDimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackTypeFinalizeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RackTypeFinalizeMutation = { __typename?: 'Mutation', rackTypeFinalize: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null, storageType?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, storageDimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackTypeArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RackTypeArchiveMutation = { __typename?: 'Mutation', rackTypeArchive: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null, storageType?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, storageDimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RackTypeUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RackTypeUnarchiveMutation = { __typename?: 'Mutation', rackTypeUnarchive: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null, storageType?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, storageDimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehousesQueryVariables = Exact<{
  searchFilter: SearchFilter;
  typeID?: InputMaybe<Scalars['ID']>;
  isThirdParty?: InputMaybe<Scalars['Boolean']>;
}>;


export type WarehousesQuery = { __typename?: 'Query', warehouses: { __typename?: 'WarehousesResult', total: number, warehouses: Array<{ __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, warehouseUID?: any | null, name?: string | null, details?: any | null, locality?: string | null, city?: string | null, pincode?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: any | null, wallHeight?: any | null, carpetLength?: any | null, carpetBreadth?: any | null, buildUpLength?: any | null, buildUpBreadth?: any | null } | null, specifications?: Array<{ __typename?: 'WarehouseSpecification', key?: string | null, value?: string | null }> | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type WarehouseQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type WarehouseQuery = { __typename?: 'Query', warehouse: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, warehouseUID?: any | null, name?: string | null, details?: any | null, locality?: string | null, city?: string | null, pincode?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: any | null, wallHeight?: any | null, carpetLength?: any | null, carpetBreadth?: any | null, buildUpLength?: any | null, buildUpBreadth?: any | null } | null, specifications?: Array<{ __typename?: 'WarehouseSpecification', key?: string | null, value?: string | null }> | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseCreateMutationVariables = Exact<{
  input: UpdateWarehouse;
}>;


export type WarehouseCreateMutation = { __typename?: 'Mutation', warehouseCreate: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, warehouseUID?: any | null, name?: string | null, details?: any | null, locality?: string | null, city?: string | null, pincode?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: any | null, wallHeight?: any | null, carpetLength?: any | null, carpetBreadth?: any | null, buildUpLength?: any | null, buildUpBreadth?: any | null } | null, specifications?: Array<{ __typename?: 'WarehouseSpecification', key?: string | null, value?: string | null }> | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseUpdateMutationVariables = Exact<{
  uid: Scalars['UUID'];
  input: UpdateWarehouse;
}>;


export type WarehouseUpdateMutation = { __typename?: 'Mutation', warehouseUpdate: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, warehouseUID?: any | null, name?: string | null, details?: any | null, locality?: string | null, city?: string | null, pincode?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: any | null, wallHeight?: any | null, carpetLength?: any | null, carpetBreadth?: any | null, buildUpLength?: any | null, buildUpBreadth?: any | null } | null, specifications?: Array<{ __typename?: 'WarehouseSpecification', key?: string | null, value?: string | null }> | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseFinalizeMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseFinalizeMutation = { __typename?: 'Mutation', warehouseFinalize: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, warehouseUID?: any | null, name?: string | null, details?: any | null, locality?: string | null, city?: string | null, pincode?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: any | null, wallHeight?: any | null, carpetLength?: any | null, carpetBreadth?: any | null, buildUpLength?: any | null, buildUpBreadth?: any | null } | null, specifications?: Array<{ __typename?: 'WarehouseSpecification', key?: string | null, value?: string | null }> | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseArchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseArchiveMutation = { __typename?: 'Mutation', warehouseArchive: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, warehouseUID?: any | null, name?: string | null, details?: any | null, locality?: string | null, city?: string | null, pincode?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: any | null, wallHeight?: any | null, carpetLength?: any | null, carpetBreadth?: any | null, buildUpLength?: any | null, buildUpBreadth?: any | null } | null, specifications?: Array<{ __typename?: 'WarehouseSpecification', key?: string | null, value?: string | null }> | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseUnarchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseUnarchiveMutation = { __typename?: 'Mutation', warehouseUnarchive: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, warehouseUID?: any | null, name?: string | null, details?: any | null, locality?: string | null, city?: string | null, pincode?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: any | null, wallHeight?: any | null, carpetLength?: any | null, carpetBreadth?: any | null, buildUpLength?: any | null, buildUpBreadth?: any | null } | null, specifications?: Array<{ __typename?: 'WarehouseSpecification', key?: string | null, value?: string | null }> | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, geoLocation?: { __typename?: 'GeoLocation', lat?: any | null, lon?: any | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseContractsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  view?: InputMaybe<ViewOption>;
  contractorUID?: InputMaybe<Scalars['UUID']>;
  clientUID?: InputMaybe<Scalars['UUID']>;
  warehouseUID?: InputMaybe<Scalars['UUID']>;
}>;


export type WarehouseContractsQuery = { __typename?: 'Query', warehouseContracts: { __typename?: 'WarehouseContractsResult', total: number, warehouseContracts: Array<{ __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type WarehouseContractQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type WarehouseContractQuery = { __typename?: 'Query', warehouseContract: { __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseContractCreateMutationVariables = Exact<{
  input: UpdateWarehouseContract;
}>;


export type WarehouseContractCreateMutation = { __typename?: 'Mutation', warehouseContractCreate: { __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseContractUpdateMutationVariables = Exact<{
  uid: Scalars['UUID'];
  input: UpdateWarehouseContract;
}>;


export type WarehouseContractUpdateMutation = { __typename?: 'Mutation', warehouseContractUpdate: { __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseContractFinalizeMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseContractFinalizeMutation = { __typename?: 'Mutation', warehouseContractFinalize: { __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseContractAcceptMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseContractAcceptMutation = { __typename?: 'Mutation', warehouseContractAccept: { __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseContractDeclineMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseContractDeclineMutation = { __typename?: 'Mutation', warehouseContractDecline: { __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseContractArchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseContractArchiveMutation = { __typename?: 'Mutation', warehouseContractArchive: { __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseContractUnarchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseContractUnarchiveMutation = { __typename?: 'Mutation', warehouseContractUnarchive: { __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseTypesQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type WarehouseTypesQuery = { __typename?: 'Query', warehouseTypes: { __typename?: 'WarehouseTypesResult', total: number, warehouseTypes: Array<{ __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type WarehouseTypeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type WarehouseTypeQuery = { __typename?: 'Query', warehouseType: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseTypeCreateMutationVariables = Exact<{
  input: UpdateWarehouseType;
}>;


export type WarehouseTypeCreateMutation = { __typename?: 'Mutation', warehouseTypeCreate: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseTypeUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateWarehouseType;
}>;


export type WarehouseTypeUpdateMutation = { __typename?: 'Mutation', warehouseTypeUpdate: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseTypeFinalizeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WarehouseTypeFinalizeMutation = { __typename?: 'Mutation', warehouseTypeFinalize: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseTypeArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WarehouseTypeArchiveMutation = { __typename?: 'Mutation', warehouseTypeArchive: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseTypeUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WarehouseTypeUnarchiveMutation = { __typename?: 'Mutation', warehouseTypeUnarchive: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export const SkuCatalogueFragmentFragmentDoc = gql`
    fragment SkuCatalogueFragment on SkuCatalogue {
  id
  uid
  code
  name
  hsnCode
  brand
  description
  ingredients
  weight
  weightUnit
  masterPhoto {
    name
    url
  }
  parentSkuUID
  isParent
  status
  isFinal
  isArchived
  createdAt
  batchCount
  organization {
    uid
    code
    name
  }
}
    `;
export const BatchCatalogueFragmentFragmentDoc = gql`
    fragment BatchCatalogueFragment on BatchCatalogue {
  id
  uid
  code
  batchNumber
  description
  productionDate
  expiryDate
  status
  isFinal
  isArchived
  organization {
    uid
    code
    name
  }
  sku {
    uid
    code
    name
  }
}
    `;
export const OrganizationFragmentFragmentDoc = gql`
    fragment OrganizationFragment on Organization {
  id
  uid
  code
  name
  website
  logo {
    name
    url
  }
  sector
  status
  isArchived
  createdAt
}
    `;
export const DepartmentFragmentFragmentDoc = gql`
    fragment DepartmentFragment on Department {
  id
  code
  name
  isFinal
  isArchived
  createdAt
  updatedAt
  organization {
    uid
    code
    name
  }
}
    `;
export const RoleFragmentFragmentDoc = gql`
    fragment RoleFragment on Role {
  id
  code
  name
  isManagement
  isFinal
  isArchived
  createdAt
  permissions
  organization {
    uid
    code
    name
  }
  department {
    id
    code
    name
  }
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  firstName
  lastName
  email
  phone
  isFinal
  isArchived
  role {
    id
    code
    name
    isManagement
  }
  organization {
    uid
    code
    name
  }
  createdAt
}
    `;
export const ContactFragmentFragmentDoc = gql`
    fragment ContactFragment on Contact {
  id
  code
  companyUID
  name
  website
  sector
  isFinal
  isArchived
  organization {
    uid
    code
    name
  }
  createdAt
}
    `;
export const AutherFragmentFragmentDoc = gql`
    fragment AutherFragment on Auther {
  id
  isAdmin
  orgUID
  roleID
  sessionToken
}
    `;
export const SkuFragmentFragmentDoc = gql`
    fragment SkuFragment on Sku {
  id
  uid
  code
  name
  hsnCode
  brand
  description
  ingredients
  weight
  weightUnit
  masterPhoto {
    name
    url
  }
  parentSkuUID
  isParent
  status
  isFinal
  isArchived
  createdAt
  batchCount
  cartonCount
  organization {
    uid
    code
    name
  }
}
    `;
export const BatchFragmentFragmentDoc = gql`
    fragment BatchFragment on Batch {
  id
  uid
  code
  batchNumber
  description
  productionDate
  expiryDate
  status
  isFinal
  isArchived
  cartonCount
  sku {
    uid
    code
    name
  }
  organization {
    uid
    code
    name
  }
}
    `;
export const QrOrderFragmentFragmentDoc = gql`
    fragment QROrderFragment on QROrder {
  id
  uid
  code
  objectType
  description
  quantity
  status
  isFinal
  isArchived
  createdAt
  updatedAt
  organization {
    id
    uid
    code
    name
  }
  warehouse {
    id
    uid
    code
    name
  }
  sku {
    id
    uid
    code
    name
  }
  batch {
    id
    uid
    code
    batchNumber
  }
}
    `;
export const QrOrderObjectFragmentFragmentDoc = gql`
    fragment QROrderObjectFragment on QROrderObject {
  id
  qrOrderUID
  objectUID
}
    `;
export const CartonFragmentFragmentDoc = gql`
    fragment CartonFragment on Carton {
  id
  uid
  code
  description
  status
  isArchived
  latestTransferLog {
    id
    owner {
      id
      code
      name
    }
    custodian {
      id
      code
      name
    }
    warehouse {
      id
      code
      name
    }
  }
  latestTrackerLog {
    id
    temperature
    humidity
    geoLocation {
      lat
      lon
    }
  }
  latestTransaction {
    name
    createdAt
  }
  sku {
    uid
    code
    name
  }
  batch {
    uid
    code
    batchNumber
  }
}
    `;
export const CartonTransferLogFragmentFragmentDoc = gql`
    fragment CartonTransferLogFragment on CartonTransferLog {
  id
  owner {
    uid
    code
    name
  }
  custodian {
    uid
    code
    name
  }
  warehouse {
    uid
    code
    name
  }
  createdAt
}
    `;
export const CartonTrackerLogFragmentFragmentDoc = gql`
    fragment CartonTrackerLogFragment on CartonTrackerLog {
  id
  temperature
  humidity
  geoLocation {
    lat
    lon
  }
  createdAt
}
    `;
export const ContainerFragmentFragmentDoc = gql`
    fragment ContainerFragment on Container {
  id
  uid
  code
  description
  status
  isArchived
  latestTransferLog {
    id
    owner {
      id
      code
      name
    }
    custodian {
      id
      code
      name
    }
    warehouse {
      id
      code
      name
    }
  }
  latestTrackerLog {
    id
    temperature
    humidity
    geoLocation {
      lat
      lon
    }
  }
  latestTransaction {
    name
    createdAt
  }
}
    `;
export const ContainerTransferLogFragmentFragmentDoc = gql`
    fragment ContainerTransferLogFragment on ContainerTransferLog {
  id
  owner {
    uid
    code
    name
  }
  custodian {
    uid
    code
    name
  }
  warehouse {
    uid
    code
    name
  }
  createdAt
}
    `;
export const ContainerTrackerLogFragmentFragmentDoc = gql`
    fragment ContainerTrackerLogFragment on ContainerTrackerLog {
  id
  temperature
  humidity
  geoLocation {
    lat
    lon
  }
  createdAt
}
    `;
export const PalletFragmentFragmentDoc = gql`
    fragment PalletFragment on Pallet {
  id
  uid
  code
  description
  status
  isArchived
  latestTransferLog {
    id
    owner {
      id
      code
      name
    }
    custodian {
      id
      code
      name
    }
    warehouse {
      id
      code
      name
    }
  }
  latestTrackerLog {
    id
    temperature
    humidity
    geoLocation {
      lat
      lon
    }
  }
  latestTransaction {
    name
    createdAt
  }
}
    `;
export const PalletTransferLogFragmentFragmentDoc = gql`
    fragment PalletTransferLogFragment on PalletTransferLog {
  id
  owner {
    uid
    code
    name
  }
  custodian {
    uid
    code
    name
  }
  warehouse {
    uid
    code
    name
  }
  createdAt
}
    `;
export const PalletTrackerLogFragmentFragmentDoc = gql`
    fragment PalletTrackerLogFragment on PalletTrackerLog {
  id
  temperature
  humidity
  geoLocation {
    lat
    lon
  }
  createdAt
}
    `;
export const PurchaseOrderFragmentFragmentDoc = gql`
    fragment PurchaseOrderFragment on PurchaseOrder {
  id
  uid
  code
  totalValue
  isFinal
  isArchived
  createdAt
  buyer {
    uid
    code
    name
  }
  seller {
    uid
    code
    name
  }
  financier {
    uid
    code
    name
  }
  details {
    id
    purchaseOrderUID
    version
    warehouseUID
    requitionerUID
    currency
    addressLine1
    addressLine2
    addressLine3
    city
    country
    pincode
    shippingMethod
    incoterm
    notes
    buyerMessage
    sellerMessage
    shippingTerms
    contractTerms
    documentStatus
    isSellerAccepted
    isFinanceirApproved
    createdAt
    updatedAt
  }
  items {
    id
    purchaseOrderUID
    serial
    units
    unitCost
    unitOfMeasure
    sku {
      id
      uid
      code
      name
    }
  }
}
    `;
export const PurchaseOrderListFragmentFragmentDoc = gql`
    fragment PurchaseOrderListFragment on PurchaseOrder {
  id
  uid
  code
  totalValue
  isFinal
  isArchived
  createdAt
  details {
    currency
    documentStatus
  }
  buyer {
    uid
    code
    name
  }
  seller {
    uid
    code
    name
  }
  financier {
    uid
    code
    name
  }
}
    `;
export const TransactionFragmentFragmentDoc = gql`
    fragment TransactionFragment on Transaction {
  id
  uid
  name
  objectType
  scannedAt
  geoLocation {
    lat
    lon
  }
  memo
  isPending
  manifestLineJson
  manifestLineSha256
  transactionHash
  isFinal
  isArchived
  createdAt
  creator {
    id
    firstName
    lastName
  }
  organization {
    id
    uid
    name
  }
  manifest {
    id
  }
  carton {
    id
    uid
    code
  }
  pallet {
    id
    uid
    code
  }
}
    `;
export const WarehouseTypeFragmentFragmentDoc = gql`
    fragment WarehouseTypeFragment on WarehouseType {
  id
  code
  name
  details
  status
  isFinal
  isArchived
  createdAt
  organization {
    uid
    code
    name
  }
}
    `;
export const RackTypeFragmentFragmentDoc = gql`
    fragment RackTypeFragment on RackType {
  id
  code
  name
  storageType
  storageDimension {
    length
    breadth
    height
    unit
  }
  status
  isFinal
  isArchived
  createdAt
  organization {
    uid
    code
    name
  }
}
    `;
export const WarehouseFragmentFragmentDoc = gql`
    fragment WarehouseFragment on Warehouse {
  id
  uid
  code
  warehouseUID
  name
  details
  locality
  city
  pincode
  status
  isFinal
  isArchived
  createdAt
  dimension {
    centralHeight
    wallHeight
    carpetLength
    carpetBreadth
    buildUpLength
    buildUpBreadth
  }
  specifications {
    key
    value
  }
  type {
    id
    code
    name
  }
  geoLocation {
    lat
    lon
  }
  organization {
    uid
    code
    name
  }
}
    `;
export const RackFragmentFragmentDoc = gql`
    fragment RackFragment on Rack {
  id
  code
  rows
  columns
  dimension {
    length
    breadth
    height
    unit
  }
  status
  isFinal
  isArchived
  createdAt
  type {
    id
    code
    name
  }
  warehouse {
    uid
    code
    name
  }
  organization {
    uid
    code
    name
  }
}
    `;
export const CellFragmentFragmentDoc = gql`
    fragment CellFragment on Cell {
  id
  code
  row
  col
  status
  isAllocated
  isOccupied
  isFinal
  isArchived
  createdAt
  rack {
    id
    code
  }
  warehouse {
    uid
    code
    name
  }
  organization {
    uid
    code
    name
  }
}
    `;
export const WarehouseContractFragmentFragmentDoc = gql`
    fragment WarehouseContractFragment on WarehouseContract {
  id
  uid
  code
  message
  status
  acceptanceStatus
  isFinal
  isArchived
  isAccepted
  createdAt
  contractor {
    uid
    code
    name
  }
  client {
    uid
    code
    name
  }
  warehouse {
    uid
    code
    name
  }
}
    `;
export const AutherDocument = gql`
    query Auther {
  auther {
    id
    name
    isAdmin
    orgUID
  }
}
    `;

/**
 * __useAutherQuery__
 *
 * To run a query within a React component, call `useAutherQuery` and pass it any options that fit your needs.
 * When your component renders, `useAutherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAutherQuery({
 *   variables: {
 *   },
 * });
 */
export function useAutherQuery(baseOptions?: Apollo.QueryHookOptions<AutherQuery, AutherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AutherQuery, AutherQueryVariables>(AutherDocument, options);
      }
export function useAutherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AutherQuery, AutherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AutherQuery, AutherQueryVariables>(AutherDocument, options);
        }
export type AutherQueryHookResult = ReturnType<typeof useAutherQuery>;
export type AutherLazyQueryHookResult = ReturnType<typeof useAutherLazyQuery>;
export type AutherQueryResult = Apollo.QueryResult<AutherQuery, AutherQueryVariables>;
export const GenerateOtpDocument = gql`
    mutation GenerateOTP($input: OTPRequest!) {
  generateOTP(input: $input)
}
    `;
export type GenerateOtpMutationFn = Apollo.MutationFunction<GenerateOtpMutation, GenerateOtpMutationVariables>;

/**
 * __useGenerateOtpMutation__
 *
 * To run a mutation, you first call `useGenerateOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateOtpMutation, { data, loading, error }] = useGenerateOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateOtpMutation(baseOptions?: Apollo.MutationHookOptions<GenerateOtpMutation, GenerateOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateOtpMutation, GenerateOtpMutationVariables>(GenerateOtpDocument, options);
      }
export type GenerateOtpMutationHookResult = ReturnType<typeof useGenerateOtpMutation>;
export type GenerateOtpMutationResult = Apollo.MutationResult<GenerateOtpMutation>;
export type GenerateOtpMutationOptions = Apollo.BaseMutationOptions<GenerateOtpMutation, GenerateOtpMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginRequest!) {
  login(input: $input) {
    ...AutherFragment
  }
}
    ${AutherFragmentFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const OrganizationRegisterDocument = gql`
    mutation OrganizationRegister($input: RegisterOrganization!) {
  organizationRegister(input: $input) {
    ...OrganizationFragment
  }
}
    ${OrganizationFragmentFragmentDoc}`;
export type OrganizationRegisterMutationFn = Apollo.MutationFunction<OrganizationRegisterMutation, OrganizationRegisterMutationVariables>;

/**
 * __useOrganizationRegisterMutation__
 *
 * To run a mutation, you first call `useOrganizationRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrganizationRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [organizationRegisterMutation, { data, loading, error }] = useOrganizationRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOrganizationRegisterMutation(baseOptions?: Apollo.MutationHookOptions<OrganizationRegisterMutation, OrganizationRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OrganizationRegisterMutation, OrganizationRegisterMutationVariables>(OrganizationRegisterDocument, options);
      }
export type OrganizationRegisterMutationHookResult = ReturnType<typeof useOrganizationRegisterMutation>;
export type OrganizationRegisterMutationResult = Apollo.MutationResult<OrganizationRegisterMutation>;
export type OrganizationRegisterMutationOptions = Apollo.BaseMutationOptions<OrganizationRegisterMutation, OrganizationRegisterMutationVariables>;
export const BatchCataloguesDocument = gql`
    query BatchCatalogues($searchFilter: SearchFilter!, $skuUID: UUID) {
  batchCatalogues(search: $searchFilter, skuUID: $skuUID) {
    batchCatalogues {
      ...BatchCatalogueFragment
    }
    total
  }
}
    ${BatchCatalogueFragmentFragmentDoc}`;

/**
 * __useBatchCataloguesQuery__
 *
 * To run a query within a React component, call `useBatchCataloguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBatchCataloguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBatchCataloguesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      skuUID: // value for 'skuUID'
 *   },
 * });
 */
export function useBatchCataloguesQuery(baseOptions: Apollo.QueryHookOptions<BatchCataloguesQuery, BatchCataloguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BatchCataloguesQuery, BatchCataloguesQueryVariables>(BatchCataloguesDocument, options);
      }
export function useBatchCataloguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BatchCataloguesQuery, BatchCataloguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BatchCataloguesQuery, BatchCataloguesQueryVariables>(BatchCataloguesDocument, options);
        }
export type BatchCataloguesQueryHookResult = ReturnType<typeof useBatchCataloguesQuery>;
export type BatchCataloguesLazyQueryHookResult = ReturnType<typeof useBatchCataloguesLazyQuery>;
export type BatchCataloguesQueryResult = Apollo.QueryResult<BatchCataloguesQuery, BatchCataloguesQueryVariables>;
export const BatchCatalogueDocument = gql`
    query BatchCatalogue($uid: UUID, $code: String) {
  batchCatalogue(uid: $uid, code: $code) {
    ...BatchCatalogueFragment
  }
}
    ${BatchCatalogueFragmentFragmentDoc}`;

/**
 * __useBatchCatalogueQuery__
 *
 * To run a query within a React component, call `useBatchCatalogueQuery` and pass it any options that fit your needs.
 * When your component renders, `useBatchCatalogueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBatchCatalogueQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useBatchCatalogueQuery(baseOptions?: Apollo.QueryHookOptions<BatchCatalogueQuery, BatchCatalogueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BatchCatalogueQuery, BatchCatalogueQueryVariables>(BatchCatalogueDocument, options);
      }
export function useBatchCatalogueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BatchCatalogueQuery, BatchCatalogueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BatchCatalogueQuery, BatchCatalogueQueryVariables>(BatchCatalogueDocument, options);
        }
export type BatchCatalogueQueryHookResult = ReturnType<typeof useBatchCatalogueQuery>;
export type BatchCatalogueLazyQueryHookResult = ReturnType<typeof useBatchCatalogueLazyQuery>;
export type BatchCatalogueQueryResult = Apollo.QueryResult<BatchCatalogueQuery, BatchCatalogueQueryVariables>;
export const BatchCatalogueCreateDocument = gql`
    mutation BatchCatalogueCreate($input: UpdateBatchCatalogue!) {
  batchCatalogueCreate(input: $input) {
    ...BatchCatalogueFragment
  }
}
    ${BatchCatalogueFragmentFragmentDoc}`;
export type BatchCatalogueCreateMutationFn = Apollo.MutationFunction<BatchCatalogueCreateMutation, BatchCatalogueCreateMutationVariables>;

/**
 * __useBatchCatalogueCreateMutation__
 *
 * To run a mutation, you first call `useBatchCatalogueCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBatchCatalogueCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [batchCatalogueCreateMutation, { data, loading, error }] = useBatchCatalogueCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBatchCatalogueCreateMutation(baseOptions?: Apollo.MutationHookOptions<BatchCatalogueCreateMutation, BatchCatalogueCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BatchCatalogueCreateMutation, BatchCatalogueCreateMutationVariables>(BatchCatalogueCreateDocument, options);
      }
export type BatchCatalogueCreateMutationHookResult = ReturnType<typeof useBatchCatalogueCreateMutation>;
export type BatchCatalogueCreateMutationResult = Apollo.MutationResult<BatchCatalogueCreateMutation>;
export type BatchCatalogueCreateMutationOptions = Apollo.BaseMutationOptions<BatchCatalogueCreateMutation, BatchCatalogueCreateMutationVariables>;
export const BatchCatalogueUpdateDocument = gql`
    mutation BatchCatalogueUpdate($uid: UUID!, $input: UpdateBatchCatalogue!) {
  batchCatalogueUpdate(uid: $uid, input: $input) {
    ...BatchCatalogueFragment
  }
}
    ${BatchCatalogueFragmentFragmentDoc}`;
export type BatchCatalogueUpdateMutationFn = Apollo.MutationFunction<BatchCatalogueUpdateMutation, BatchCatalogueUpdateMutationVariables>;

/**
 * __useBatchCatalogueUpdateMutation__
 *
 * To run a mutation, you first call `useBatchCatalogueUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBatchCatalogueUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [batchCatalogueUpdateMutation, { data, loading, error }] = useBatchCatalogueUpdateMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBatchCatalogueUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BatchCatalogueUpdateMutation, BatchCatalogueUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BatchCatalogueUpdateMutation, BatchCatalogueUpdateMutationVariables>(BatchCatalogueUpdateDocument, options);
      }
export type BatchCatalogueUpdateMutationHookResult = ReturnType<typeof useBatchCatalogueUpdateMutation>;
export type BatchCatalogueUpdateMutationResult = Apollo.MutationResult<BatchCatalogueUpdateMutation>;
export type BatchCatalogueUpdateMutationOptions = Apollo.BaseMutationOptions<BatchCatalogueUpdateMutation, BatchCatalogueUpdateMutationVariables>;
export const BatchCatalogueFinalizeDocument = gql`
    mutation BatchCatalogueFinalize($uid: UUID!) {
  batchCatalogueFinalize(uid: $uid) {
    ...BatchCatalogueFragment
  }
}
    ${BatchCatalogueFragmentFragmentDoc}`;
export type BatchCatalogueFinalizeMutationFn = Apollo.MutationFunction<BatchCatalogueFinalizeMutation, BatchCatalogueFinalizeMutationVariables>;

/**
 * __useBatchCatalogueFinalizeMutation__
 *
 * To run a mutation, you first call `useBatchCatalogueFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBatchCatalogueFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [batchCatalogueFinalizeMutation, { data, loading, error }] = useBatchCatalogueFinalizeMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useBatchCatalogueFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<BatchCatalogueFinalizeMutation, BatchCatalogueFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BatchCatalogueFinalizeMutation, BatchCatalogueFinalizeMutationVariables>(BatchCatalogueFinalizeDocument, options);
      }
export type BatchCatalogueFinalizeMutationHookResult = ReturnType<typeof useBatchCatalogueFinalizeMutation>;
export type BatchCatalogueFinalizeMutationResult = Apollo.MutationResult<BatchCatalogueFinalizeMutation>;
export type BatchCatalogueFinalizeMutationOptions = Apollo.BaseMutationOptions<BatchCatalogueFinalizeMutation, BatchCatalogueFinalizeMutationVariables>;
export const BatchCatalogueArchiveDocument = gql`
    mutation BatchCatalogueArchive($uid: UUID!) {
  batchCatalogueArchive(uid: $uid) {
    ...BatchCatalogueFragment
  }
}
    ${BatchCatalogueFragmentFragmentDoc}`;
export type BatchCatalogueArchiveMutationFn = Apollo.MutationFunction<BatchCatalogueArchiveMutation, BatchCatalogueArchiveMutationVariables>;

/**
 * __useBatchCatalogueArchiveMutation__
 *
 * To run a mutation, you first call `useBatchCatalogueArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBatchCatalogueArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [batchCatalogueArchiveMutation, { data, loading, error }] = useBatchCatalogueArchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useBatchCatalogueArchiveMutation(baseOptions?: Apollo.MutationHookOptions<BatchCatalogueArchiveMutation, BatchCatalogueArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BatchCatalogueArchiveMutation, BatchCatalogueArchiveMutationVariables>(BatchCatalogueArchiveDocument, options);
      }
export type BatchCatalogueArchiveMutationHookResult = ReturnType<typeof useBatchCatalogueArchiveMutation>;
export type BatchCatalogueArchiveMutationResult = Apollo.MutationResult<BatchCatalogueArchiveMutation>;
export type BatchCatalogueArchiveMutationOptions = Apollo.BaseMutationOptions<BatchCatalogueArchiveMutation, BatchCatalogueArchiveMutationVariables>;
export const BatchCatalogueUnarchiveDocument = gql`
    mutation BatchCatalogueUnarchive($uid: UUID!) {
  batchCatalogueUnarchive(uid: $uid) {
    ...BatchCatalogueFragment
  }
}
    ${BatchCatalogueFragmentFragmentDoc}`;
export type BatchCatalogueUnarchiveMutationFn = Apollo.MutationFunction<BatchCatalogueUnarchiveMutation, BatchCatalogueUnarchiveMutationVariables>;

/**
 * __useBatchCatalogueUnarchiveMutation__
 *
 * To run a mutation, you first call `useBatchCatalogueUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBatchCatalogueUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [batchCatalogueUnarchiveMutation, { data, loading, error }] = useBatchCatalogueUnarchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useBatchCatalogueUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<BatchCatalogueUnarchiveMutation, BatchCatalogueUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BatchCatalogueUnarchiveMutation, BatchCatalogueUnarchiveMutationVariables>(BatchCatalogueUnarchiveDocument, options);
      }
export type BatchCatalogueUnarchiveMutationHookResult = ReturnType<typeof useBatchCatalogueUnarchiveMutation>;
export type BatchCatalogueUnarchiveMutationResult = Apollo.MutationResult<BatchCatalogueUnarchiveMutation>;
export type BatchCatalogueUnarchiveMutationOptions = Apollo.BaseMutationOptions<BatchCatalogueUnarchiveMutation, BatchCatalogueUnarchiveMutationVariables>;
export const SkuCataloguesDocument = gql`
    query SkuCatalogues($searchFilter: SearchFilter!) {
  skuCatalogues(search: $searchFilter) {
    skuCatalogues {
      ...SkuCatalogueFragment
    }
    total
  }
}
    ${SkuCatalogueFragmentFragmentDoc}`;

/**
 * __useSkuCataloguesQuery__
 *
 * To run a query within a React component, call `useSkuCataloguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkuCataloguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkuCataloguesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function useSkuCataloguesQuery(baseOptions: Apollo.QueryHookOptions<SkuCataloguesQuery, SkuCataloguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkuCataloguesQuery, SkuCataloguesQueryVariables>(SkuCataloguesDocument, options);
      }
export function useSkuCataloguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkuCataloguesQuery, SkuCataloguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkuCataloguesQuery, SkuCataloguesQueryVariables>(SkuCataloguesDocument, options);
        }
export type SkuCataloguesQueryHookResult = ReturnType<typeof useSkuCataloguesQuery>;
export type SkuCataloguesLazyQueryHookResult = ReturnType<typeof useSkuCataloguesLazyQuery>;
export type SkuCataloguesQueryResult = Apollo.QueryResult<SkuCataloguesQuery, SkuCataloguesQueryVariables>;
export const SkuCatalogueDocument = gql`
    query SkuCatalogue($uid: UUID, $code: String) {
  skuCatalogue(uid: $uid, code: $code) {
    ...SkuCatalogueFragment
  }
}
    ${SkuCatalogueFragmentFragmentDoc}`;

/**
 * __useSkuCatalogueQuery__
 *
 * To run a query within a React component, call `useSkuCatalogueQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkuCatalogueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkuCatalogueQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useSkuCatalogueQuery(baseOptions?: Apollo.QueryHookOptions<SkuCatalogueQuery, SkuCatalogueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkuCatalogueQuery, SkuCatalogueQueryVariables>(SkuCatalogueDocument, options);
      }
export function useSkuCatalogueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkuCatalogueQuery, SkuCatalogueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkuCatalogueQuery, SkuCatalogueQueryVariables>(SkuCatalogueDocument, options);
        }
export type SkuCatalogueQueryHookResult = ReturnType<typeof useSkuCatalogueQuery>;
export type SkuCatalogueLazyQueryHookResult = ReturnType<typeof useSkuCatalogueLazyQuery>;
export type SkuCatalogueQueryResult = Apollo.QueryResult<SkuCatalogueQuery, SkuCatalogueQueryVariables>;
export const SkuCatalogueCreateDocument = gql`
    mutation SkuCatalogueCreate($input: UpdateSkuCatalogue!) {
  skuCatalogueCreate(input: $input) {
    ...SkuCatalogueFragment
  }
}
    ${SkuCatalogueFragmentFragmentDoc}`;
export type SkuCatalogueCreateMutationFn = Apollo.MutationFunction<SkuCatalogueCreateMutation, SkuCatalogueCreateMutationVariables>;

/**
 * __useSkuCatalogueCreateMutation__
 *
 * To run a mutation, you first call `useSkuCatalogueCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkuCatalogueCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skuCatalogueCreateMutation, { data, loading, error }] = useSkuCatalogueCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSkuCatalogueCreateMutation(baseOptions?: Apollo.MutationHookOptions<SkuCatalogueCreateMutation, SkuCatalogueCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkuCatalogueCreateMutation, SkuCatalogueCreateMutationVariables>(SkuCatalogueCreateDocument, options);
      }
export type SkuCatalogueCreateMutationHookResult = ReturnType<typeof useSkuCatalogueCreateMutation>;
export type SkuCatalogueCreateMutationResult = Apollo.MutationResult<SkuCatalogueCreateMutation>;
export type SkuCatalogueCreateMutationOptions = Apollo.BaseMutationOptions<SkuCatalogueCreateMutation, SkuCatalogueCreateMutationVariables>;
export const SkuCatalogueUpdateDocument = gql`
    mutation SkuCatalogueUpdate($uid: UUID!, $input: UpdateSkuCatalogue!) {
  skuCatalogueUpdate(uid: $uid, input: $input) {
    ...SkuCatalogueFragment
  }
}
    ${SkuCatalogueFragmentFragmentDoc}`;
export type SkuCatalogueUpdateMutationFn = Apollo.MutationFunction<SkuCatalogueUpdateMutation, SkuCatalogueUpdateMutationVariables>;

/**
 * __useSkuCatalogueUpdateMutation__
 *
 * To run a mutation, you first call `useSkuCatalogueUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkuCatalogueUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skuCatalogueUpdateMutation, { data, loading, error }] = useSkuCatalogueUpdateMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSkuCatalogueUpdateMutation(baseOptions?: Apollo.MutationHookOptions<SkuCatalogueUpdateMutation, SkuCatalogueUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkuCatalogueUpdateMutation, SkuCatalogueUpdateMutationVariables>(SkuCatalogueUpdateDocument, options);
      }
export type SkuCatalogueUpdateMutationHookResult = ReturnType<typeof useSkuCatalogueUpdateMutation>;
export type SkuCatalogueUpdateMutationResult = Apollo.MutationResult<SkuCatalogueUpdateMutation>;
export type SkuCatalogueUpdateMutationOptions = Apollo.BaseMutationOptions<SkuCatalogueUpdateMutation, SkuCatalogueUpdateMutationVariables>;
export const SkuCatalogueFinalizeDocument = gql`
    mutation SkuCatalogueFinalize($uid: UUID!) {
  skuCatalogueFinalize(uid: $uid) {
    ...SkuCatalogueFragment
  }
}
    ${SkuCatalogueFragmentFragmentDoc}`;
export type SkuCatalogueFinalizeMutationFn = Apollo.MutationFunction<SkuCatalogueFinalizeMutation, SkuCatalogueFinalizeMutationVariables>;

/**
 * __useSkuCatalogueFinalizeMutation__
 *
 * To run a mutation, you first call `useSkuCatalogueFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkuCatalogueFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skuCatalogueFinalizeMutation, { data, loading, error }] = useSkuCatalogueFinalizeMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useSkuCatalogueFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<SkuCatalogueFinalizeMutation, SkuCatalogueFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkuCatalogueFinalizeMutation, SkuCatalogueFinalizeMutationVariables>(SkuCatalogueFinalizeDocument, options);
      }
export type SkuCatalogueFinalizeMutationHookResult = ReturnType<typeof useSkuCatalogueFinalizeMutation>;
export type SkuCatalogueFinalizeMutationResult = Apollo.MutationResult<SkuCatalogueFinalizeMutation>;
export type SkuCatalogueFinalizeMutationOptions = Apollo.BaseMutationOptions<SkuCatalogueFinalizeMutation, SkuCatalogueFinalizeMutationVariables>;
export const SkuCatalogueArchiveDocument = gql`
    mutation SkuCatalogueArchive($uid: UUID!) {
  skuCatalogueArchive(uid: $uid) {
    ...SkuCatalogueFragment
  }
}
    ${SkuCatalogueFragmentFragmentDoc}`;
export type SkuCatalogueArchiveMutationFn = Apollo.MutationFunction<SkuCatalogueArchiveMutation, SkuCatalogueArchiveMutationVariables>;

/**
 * __useSkuCatalogueArchiveMutation__
 *
 * To run a mutation, you first call `useSkuCatalogueArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkuCatalogueArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skuCatalogueArchiveMutation, { data, loading, error }] = useSkuCatalogueArchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useSkuCatalogueArchiveMutation(baseOptions?: Apollo.MutationHookOptions<SkuCatalogueArchiveMutation, SkuCatalogueArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkuCatalogueArchiveMutation, SkuCatalogueArchiveMutationVariables>(SkuCatalogueArchiveDocument, options);
      }
export type SkuCatalogueArchiveMutationHookResult = ReturnType<typeof useSkuCatalogueArchiveMutation>;
export type SkuCatalogueArchiveMutationResult = Apollo.MutationResult<SkuCatalogueArchiveMutation>;
export type SkuCatalogueArchiveMutationOptions = Apollo.BaseMutationOptions<SkuCatalogueArchiveMutation, SkuCatalogueArchiveMutationVariables>;
export const SkuCatalogueUnarchiveDocument = gql`
    mutation SkuCatalogueUnarchive($uid: UUID!) {
  skuCatalogueUnarchive(uid: $uid) {
    ...SkuCatalogueFragment
  }
}
    ${SkuCatalogueFragmentFragmentDoc}`;
export type SkuCatalogueUnarchiveMutationFn = Apollo.MutationFunction<SkuCatalogueUnarchiveMutation, SkuCatalogueUnarchiveMutationVariables>;

/**
 * __useSkuCatalogueUnarchiveMutation__
 *
 * To run a mutation, you first call `useSkuCatalogueUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkuCatalogueUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skuCatalogueUnarchiveMutation, { data, loading, error }] = useSkuCatalogueUnarchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useSkuCatalogueUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<SkuCatalogueUnarchiveMutation, SkuCatalogueUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkuCatalogueUnarchiveMutation, SkuCatalogueUnarchiveMutationVariables>(SkuCatalogueUnarchiveDocument, options);
      }
export type SkuCatalogueUnarchiveMutationHookResult = ReturnType<typeof useSkuCatalogueUnarchiveMutation>;
export type SkuCatalogueUnarchiveMutationResult = Apollo.MutationResult<SkuCatalogueUnarchiveMutation>;
export type SkuCatalogueUnarchiveMutationOptions = Apollo.BaseMutationOptions<SkuCatalogueUnarchiveMutation, SkuCatalogueUnarchiveMutationVariables>;
export const ContactsDocument = gql`
    query Contacts($searchFilter: SearchFilter!) {
  contacts(search: $searchFilter) {
    contacts {
      ...ContactFragment
    }
    total
  }
}
    ${ContactFragmentFragmentDoc}`;

/**
 * __useContactsQuery__
 *
 * To run a query within a React component, call `useContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function useContactsQuery(baseOptions: Apollo.QueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, options);
      }
export function useContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, options);
        }
export type ContactsQueryHookResult = ReturnType<typeof useContactsQuery>;
export type ContactsLazyQueryHookResult = ReturnType<typeof useContactsLazyQuery>;
export type ContactsQueryResult = Apollo.QueryResult<ContactsQuery, ContactsQueryVariables>;
export const ContactDocument = gql`
    query Contact($id: ID, $code: String) {
  contact(id: $id, code: $code) {
    ...ContactFragment
  }
}
    ${ContactFragmentFragmentDoc}`;

/**
 * __useContactQuery__
 *
 * To run a query within a React component, call `useContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useContactQuery(baseOptions?: Apollo.QueryHookOptions<ContactQuery, ContactQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactQuery, ContactQueryVariables>(ContactDocument, options);
      }
export function useContactLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactQuery, ContactQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactQuery, ContactQueryVariables>(ContactDocument, options);
        }
export type ContactQueryHookResult = ReturnType<typeof useContactQuery>;
export type ContactLazyQueryHookResult = ReturnType<typeof useContactLazyQuery>;
export type ContactQueryResult = Apollo.QueryResult<ContactQuery, ContactQueryVariables>;
export const ContactCreateDocument = gql`
    mutation ContactCreate($input: UpdateContact!) {
  contactCreate(input: $input) {
    ...ContactFragment
  }
}
    ${ContactFragmentFragmentDoc}`;
export type ContactCreateMutationFn = Apollo.MutationFunction<ContactCreateMutation, ContactCreateMutationVariables>;

/**
 * __useContactCreateMutation__
 *
 * To run a mutation, you first call `useContactCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactCreateMutation, { data, loading, error }] = useContactCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContactCreateMutation(baseOptions?: Apollo.MutationHookOptions<ContactCreateMutation, ContactCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactCreateMutation, ContactCreateMutationVariables>(ContactCreateDocument, options);
      }
export type ContactCreateMutationHookResult = ReturnType<typeof useContactCreateMutation>;
export type ContactCreateMutationResult = Apollo.MutationResult<ContactCreateMutation>;
export type ContactCreateMutationOptions = Apollo.BaseMutationOptions<ContactCreateMutation, ContactCreateMutationVariables>;
export const ContactUpdateDocument = gql`
    mutation ContactUpdate($id: ID!, $input: UpdateContact!) {
  contactUpdate(id: $id, input: $input) {
    ...ContactFragment
  }
}
    ${ContactFragmentFragmentDoc}`;
export type ContactUpdateMutationFn = Apollo.MutationFunction<ContactUpdateMutation, ContactUpdateMutationVariables>;

/**
 * __useContactUpdateMutation__
 *
 * To run a mutation, you first call `useContactUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUpdateMutation, { data, loading, error }] = useContactUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContactUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ContactUpdateMutation, ContactUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactUpdateMutation, ContactUpdateMutationVariables>(ContactUpdateDocument, options);
      }
export type ContactUpdateMutationHookResult = ReturnType<typeof useContactUpdateMutation>;
export type ContactUpdateMutationResult = Apollo.MutationResult<ContactUpdateMutation>;
export type ContactUpdateMutationOptions = Apollo.BaseMutationOptions<ContactUpdateMutation, ContactUpdateMutationVariables>;
export const ContactFinalizeDocument = gql`
    mutation ContactFinalize($id: ID!) {
  contactFinalize(id: $id) {
    ...ContactFragment
  }
}
    ${ContactFragmentFragmentDoc}`;
export type ContactFinalizeMutationFn = Apollo.MutationFunction<ContactFinalizeMutation, ContactFinalizeMutationVariables>;

/**
 * __useContactFinalizeMutation__
 *
 * To run a mutation, you first call `useContactFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactFinalizeMutation, { data, loading, error }] = useContactFinalizeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContactFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<ContactFinalizeMutation, ContactFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactFinalizeMutation, ContactFinalizeMutationVariables>(ContactFinalizeDocument, options);
      }
export type ContactFinalizeMutationHookResult = ReturnType<typeof useContactFinalizeMutation>;
export type ContactFinalizeMutationResult = Apollo.MutationResult<ContactFinalizeMutation>;
export type ContactFinalizeMutationOptions = Apollo.BaseMutationOptions<ContactFinalizeMutation, ContactFinalizeMutationVariables>;
export const ContactArchiveDocument = gql`
    mutation ContactArchive($id: ID!) {
  contactArchive(id: $id) {
    ...ContactFragment
  }
}
    ${ContactFragmentFragmentDoc}`;
export type ContactArchiveMutationFn = Apollo.MutationFunction<ContactArchiveMutation, ContactArchiveMutationVariables>;

/**
 * __useContactArchiveMutation__
 *
 * To run a mutation, you first call `useContactArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactArchiveMutation, { data, loading, error }] = useContactArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContactArchiveMutation(baseOptions?: Apollo.MutationHookOptions<ContactArchiveMutation, ContactArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactArchiveMutation, ContactArchiveMutationVariables>(ContactArchiveDocument, options);
      }
export type ContactArchiveMutationHookResult = ReturnType<typeof useContactArchiveMutation>;
export type ContactArchiveMutationResult = Apollo.MutationResult<ContactArchiveMutation>;
export type ContactArchiveMutationOptions = Apollo.BaseMutationOptions<ContactArchiveMutation, ContactArchiveMutationVariables>;
export const ContactUnarchiveDocument = gql`
    mutation ContactUnarchive($id: ID!) {
  contactUnarchive(id: $id) {
    ...ContactFragment
  }
}
    ${ContactFragmentFragmentDoc}`;
export type ContactUnarchiveMutationFn = Apollo.MutationFunction<ContactUnarchiveMutation, ContactUnarchiveMutationVariables>;

/**
 * __useContactUnarchiveMutation__
 *
 * To run a mutation, you first call `useContactUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUnarchiveMutation, { data, loading, error }] = useContactUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContactUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<ContactUnarchiveMutation, ContactUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactUnarchiveMutation, ContactUnarchiveMutationVariables>(ContactUnarchiveDocument, options);
      }
export type ContactUnarchiveMutationHookResult = ReturnType<typeof useContactUnarchiveMutation>;
export type ContactUnarchiveMutationResult = Apollo.MutationResult<ContactUnarchiveMutation>;
export type ContactUnarchiveMutationOptions = Apollo.BaseMutationOptions<ContactUnarchiveMutation, ContactUnarchiveMutationVariables>;
export const DepartmentsDocument = gql`
    query Departments($searchFilter: SearchFilter!) {
  departments(search: $searchFilter) {
    departments {
      ...DepartmentFragment
    }
    total
  }
}
    ${DepartmentFragmentFragmentDoc}`;

/**
 * __useDepartmentsQuery__
 *
 * To run a query within a React component, call `useDepartmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDepartmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDepartmentsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function useDepartmentsQuery(baseOptions: Apollo.QueryHookOptions<DepartmentsQuery, DepartmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DepartmentsQuery, DepartmentsQueryVariables>(DepartmentsDocument, options);
      }
export function useDepartmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DepartmentsQuery, DepartmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DepartmentsQuery, DepartmentsQueryVariables>(DepartmentsDocument, options);
        }
export type DepartmentsQueryHookResult = ReturnType<typeof useDepartmentsQuery>;
export type DepartmentsLazyQueryHookResult = ReturnType<typeof useDepartmentsLazyQuery>;
export type DepartmentsQueryResult = Apollo.QueryResult<DepartmentsQuery, DepartmentsQueryVariables>;
export const DepartmentDocument = gql`
    query Department($id: ID, $code: String) {
  department(id: $id, code: $code) {
    ...DepartmentFragment
  }
}
    ${DepartmentFragmentFragmentDoc}`;

/**
 * __useDepartmentQuery__
 *
 * To run a query within a React component, call `useDepartmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useDepartmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDepartmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useDepartmentQuery(baseOptions?: Apollo.QueryHookOptions<DepartmentQuery, DepartmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DepartmentQuery, DepartmentQueryVariables>(DepartmentDocument, options);
      }
export function useDepartmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DepartmentQuery, DepartmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DepartmentQuery, DepartmentQueryVariables>(DepartmentDocument, options);
        }
export type DepartmentQueryHookResult = ReturnType<typeof useDepartmentQuery>;
export type DepartmentLazyQueryHookResult = ReturnType<typeof useDepartmentLazyQuery>;
export type DepartmentQueryResult = Apollo.QueryResult<DepartmentQuery, DepartmentQueryVariables>;
export const DepartmentCreateDocument = gql`
    mutation DepartmentCreate($input: UpdateDepartment!) {
  departmentCreate(input: $input) {
    ...DepartmentFragment
  }
}
    ${DepartmentFragmentFragmentDoc}`;
export type DepartmentCreateMutationFn = Apollo.MutationFunction<DepartmentCreateMutation, DepartmentCreateMutationVariables>;

/**
 * __useDepartmentCreateMutation__
 *
 * To run a mutation, you first call `useDepartmentCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDepartmentCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [departmentCreateMutation, { data, loading, error }] = useDepartmentCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDepartmentCreateMutation(baseOptions?: Apollo.MutationHookOptions<DepartmentCreateMutation, DepartmentCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DepartmentCreateMutation, DepartmentCreateMutationVariables>(DepartmentCreateDocument, options);
      }
export type DepartmentCreateMutationHookResult = ReturnType<typeof useDepartmentCreateMutation>;
export type DepartmentCreateMutationResult = Apollo.MutationResult<DepartmentCreateMutation>;
export type DepartmentCreateMutationOptions = Apollo.BaseMutationOptions<DepartmentCreateMutation, DepartmentCreateMutationVariables>;
export const DepartmentUpdateDocument = gql`
    mutation DepartmentUpdate($id: ID!, $input: UpdateDepartment!) {
  departmentUpdate(id: $id, input: $input) {
    ...DepartmentFragment
  }
}
    ${DepartmentFragmentFragmentDoc}`;
export type DepartmentUpdateMutationFn = Apollo.MutationFunction<DepartmentUpdateMutation, DepartmentUpdateMutationVariables>;

/**
 * __useDepartmentUpdateMutation__
 *
 * To run a mutation, you first call `useDepartmentUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDepartmentUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [departmentUpdateMutation, { data, loading, error }] = useDepartmentUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDepartmentUpdateMutation(baseOptions?: Apollo.MutationHookOptions<DepartmentUpdateMutation, DepartmentUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DepartmentUpdateMutation, DepartmentUpdateMutationVariables>(DepartmentUpdateDocument, options);
      }
export type DepartmentUpdateMutationHookResult = ReturnType<typeof useDepartmentUpdateMutation>;
export type DepartmentUpdateMutationResult = Apollo.MutationResult<DepartmentUpdateMutation>;
export type DepartmentUpdateMutationOptions = Apollo.BaseMutationOptions<DepartmentUpdateMutation, DepartmentUpdateMutationVariables>;
export const DepartmentFinalizeDocument = gql`
    mutation DepartmentFinalize($id: ID!) {
  departmentFinalize(id: $id) {
    ...DepartmentFragment
  }
}
    ${DepartmentFragmentFragmentDoc}`;
export type DepartmentFinalizeMutationFn = Apollo.MutationFunction<DepartmentFinalizeMutation, DepartmentFinalizeMutationVariables>;

/**
 * __useDepartmentFinalizeMutation__
 *
 * To run a mutation, you first call `useDepartmentFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDepartmentFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [departmentFinalizeMutation, { data, loading, error }] = useDepartmentFinalizeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDepartmentFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<DepartmentFinalizeMutation, DepartmentFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DepartmentFinalizeMutation, DepartmentFinalizeMutationVariables>(DepartmentFinalizeDocument, options);
      }
export type DepartmentFinalizeMutationHookResult = ReturnType<typeof useDepartmentFinalizeMutation>;
export type DepartmentFinalizeMutationResult = Apollo.MutationResult<DepartmentFinalizeMutation>;
export type DepartmentFinalizeMutationOptions = Apollo.BaseMutationOptions<DepartmentFinalizeMutation, DepartmentFinalizeMutationVariables>;
export const DepartmentArchiveDocument = gql`
    mutation DepartmentArchive($id: ID!) {
  departmentArchive(id: $id) {
    ...DepartmentFragment
  }
}
    ${DepartmentFragmentFragmentDoc}`;
export type DepartmentArchiveMutationFn = Apollo.MutationFunction<DepartmentArchiveMutation, DepartmentArchiveMutationVariables>;

/**
 * __useDepartmentArchiveMutation__
 *
 * To run a mutation, you first call `useDepartmentArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDepartmentArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [departmentArchiveMutation, { data, loading, error }] = useDepartmentArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDepartmentArchiveMutation(baseOptions?: Apollo.MutationHookOptions<DepartmentArchiveMutation, DepartmentArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DepartmentArchiveMutation, DepartmentArchiveMutationVariables>(DepartmentArchiveDocument, options);
      }
export type DepartmentArchiveMutationHookResult = ReturnType<typeof useDepartmentArchiveMutation>;
export type DepartmentArchiveMutationResult = Apollo.MutationResult<DepartmentArchiveMutation>;
export type DepartmentArchiveMutationOptions = Apollo.BaseMutationOptions<DepartmentArchiveMutation, DepartmentArchiveMutationVariables>;
export const DepartmentUnarchiveDocument = gql`
    mutation DepartmentUnarchive($id: ID!) {
  departmentUnarchive(id: $id) {
    ...DepartmentFragment
  }
}
    ${DepartmentFragmentFragmentDoc}`;
export type DepartmentUnarchiveMutationFn = Apollo.MutationFunction<DepartmentUnarchiveMutation, DepartmentUnarchiveMutationVariables>;

/**
 * __useDepartmentUnarchiveMutation__
 *
 * To run a mutation, you first call `useDepartmentUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDepartmentUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [departmentUnarchiveMutation, { data, loading, error }] = useDepartmentUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDepartmentUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<DepartmentUnarchiveMutation, DepartmentUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DepartmentUnarchiveMutation, DepartmentUnarchiveMutationVariables>(DepartmentUnarchiveDocument, options);
      }
export type DepartmentUnarchiveMutationHookResult = ReturnType<typeof useDepartmentUnarchiveMutation>;
export type DepartmentUnarchiveMutationResult = Apollo.MutationResult<DepartmentUnarchiveMutation>;
export type DepartmentUnarchiveMutationOptions = Apollo.BaseMutationOptions<DepartmentUnarchiveMutation, DepartmentUnarchiveMutationVariables>;
export const OrganizationsDocument = gql`
    query Organizations($searchFilter: SearchFilter!, $sector: String) {
  organizations(search: $searchFilter, sector: $sector) {
    organizations {
      ...OrganizationFragment
    }
    total
  }
}
    ${OrganizationFragmentFragmentDoc}`;

/**
 * __useOrganizationsQuery__
 *
 * To run a query within a React component, call `useOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      sector: // value for 'sector'
 *   },
 * });
 */
export function useOrganizationsQuery(baseOptions: Apollo.QueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, options);
      }
export function useOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, options);
        }
export type OrganizationsQueryHookResult = ReturnType<typeof useOrganizationsQuery>;
export type OrganizationsLazyQueryHookResult = ReturnType<typeof useOrganizationsLazyQuery>;
export type OrganizationsQueryResult = Apollo.QueryResult<OrganizationsQuery, OrganizationsQueryVariables>;
export const OrganizationDocument = gql`
    query Organization($uid: UUID, $code: String) {
  organization(uid: $uid, code: $code) {
    ...OrganizationFragment
  }
}
    ${OrganizationFragmentFragmentDoc}`;

/**
 * __useOrganizationQuery__
 *
 * To run a query within a React component, call `useOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useOrganizationQuery(baseOptions?: Apollo.QueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
      }
export function useOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
        }
export type OrganizationQueryHookResult = ReturnType<typeof useOrganizationQuery>;
export type OrganizationLazyQueryHookResult = ReturnType<typeof useOrganizationLazyQuery>;
export type OrganizationQueryResult = Apollo.QueryResult<OrganizationQuery, OrganizationQueryVariables>;
export const OrganizationUpdateDocument = gql`
    mutation OrganizationUpdate($uid: UUID!, $input: UpdateOrganization!) {
  organizationUpdate(uid: $uid, input: $input) {
    ...OrganizationFragment
  }
}
    ${OrganizationFragmentFragmentDoc}`;
export type OrganizationUpdateMutationFn = Apollo.MutationFunction<OrganizationUpdateMutation, OrganizationUpdateMutationVariables>;

/**
 * __useOrganizationUpdateMutation__
 *
 * To run a mutation, you first call `useOrganizationUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrganizationUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [organizationUpdateMutation, { data, loading, error }] = useOrganizationUpdateMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOrganizationUpdateMutation(baseOptions?: Apollo.MutationHookOptions<OrganizationUpdateMutation, OrganizationUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OrganizationUpdateMutation, OrganizationUpdateMutationVariables>(OrganizationUpdateDocument, options);
      }
export type OrganizationUpdateMutationHookResult = ReturnType<typeof useOrganizationUpdateMutation>;
export type OrganizationUpdateMutationResult = Apollo.MutationResult<OrganizationUpdateMutation>;
export type OrganizationUpdateMutationOptions = Apollo.BaseMutationOptions<OrganizationUpdateMutation, OrganizationUpdateMutationVariables>;
export const OrganizationArchiveDocument = gql`
    mutation OrganizationArchive($uid: UUID!) {
  organizationArchive(uid: $uid) {
    ...OrganizationFragment
  }
}
    ${OrganizationFragmentFragmentDoc}`;
export type OrganizationArchiveMutationFn = Apollo.MutationFunction<OrganizationArchiveMutation, OrganizationArchiveMutationVariables>;

/**
 * __useOrganizationArchiveMutation__
 *
 * To run a mutation, you first call `useOrganizationArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrganizationArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [organizationArchiveMutation, { data, loading, error }] = useOrganizationArchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useOrganizationArchiveMutation(baseOptions?: Apollo.MutationHookOptions<OrganizationArchiveMutation, OrganizationArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OrganizationArchiveMutation, OrganizationArchiveMutationVariables>(OrganizationArchiveDocument, options);
      }
export type OrganizationArchiveMutationHookResult = ReturnType<typeof useOrganizationArchiveMutation>;
export type OrganizationArchiveMutationResult = Apollo.MutationResult<OrganizationArchiveMutation>;
export type OrganizationArchiveMutationOptions = Apollo.BaseMutationOptions<OrganizationArchiveMutation, OrganizationArchiveMutationVariables>;
export const OrganizationUnarchiveDocument = gql`
    mutation OrganizationUnarchive($uid: UUID!) {
  organizationUnarchive(uid: $uid) {
    ...OrganizationFragment
  }
}
    ${OrganizationFragmentFragmentDoc}`;
export type OrganizationUnarchiveMutationFn = Apollo.MutationFunction<OrganizationUnarchiveMutation, OrganizationUnarchiveMutationVariables>;

/**
 * __useOrganizationUnarchiveMutation__
 *
 * To run a mutation, you first call `useOrganizationUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrganizationUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [organizationUnarchiveMutation, { data, loading, error }] = useOrganizationUnarchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useOrganizationUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<OrganizationUnarchiveMutation, OrganizationUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OrganizationUnarchiveMutation, OrganizationUnarchiveMutationVariables>(OrganizationUnarchiveDocument, options);
      }
export type OrganizationUnarchiveMutationHookResult = ReturnType<typeof useOrganizationUnarchiveMutation>;
export type OrganizationUnarchiveMutationResult = Apollo.MutationResult<OrganizationUnarchiveMutation>;
export type OrganizationUnarchiveMutationOptions = Apollo.BaseMutationOptions<OrganizationUnarchiveMutation, OrganizationUnarchiveMutationVariables>;
export const RolesDocument = gql`
    query Roles($searchFilter: SearchFilter!, $deptID: ID) {
  roles(search: $searchFilter, deptID: $deptID) {
    roles {
      ...RoleFragment
    }
    total
  }
}
    ${RoleFragmentFragmentDoc}`;

/**
 * __useRolesQuery__
 *
 * To run a query within a React component, call `useRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRolesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      deptID: // value for 'deptID'
 *   },
 * });
 */
export function useRolesQuery(baseOptions: Apollo.QueryHookOptions<RolesQuery, RolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RolesQuery, RolesQueryVariables>(RolesDocument, options);
      }
export function useRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RolesQuery, RolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RolesQuery, RolesQueryVariables>(RolesDocument, options);
        }
export type RolesQueryHookResult = ReturnType<typeof useRolesQuery>;
export type RolesLazyQueryHookResult = ReturnType<typeof useRolesLazyQuery>;
export type RolesQueryResult = Apollo.QueryResult<RolesQuery, RolesQueryVariables>;
export const RoleDocument = gql`
    query Role($id: ID, $code: String) {
  role(id: $id, code: $code) {
    ...RoleFragment
  }
}
    ${RoleFragmentFragmentDoc}`;

/**
 * __useRoleQuery__
 *
 * To run a query within a React component, call `useRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoleQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useRoleQuery(baseOptions?: Apollo.QueryHookOptions<RoleQuery, RoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoleQuery, RoleQueryVariables>(RoleDocument, options);
      }
export function useRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoleQuery, RoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoleQuery, RoleQueryVariables>(RoleDocument, options);
        }
export type RoleQueryHookResult = ReturnType<typeof useRoleQuery>;
export type RoleLazyQueryHookResult = ReturnType<typeof useRoleLazyQuery>;
export type RoleQueryResult = Apollo.QueryResult<RoleQuery, RoleQueryVariables>;
export const RoleCreateDocument = gql`
    mutation RoleCreate($input: UpdateRole!) {
  roleCreate(input: $input) {
    ...RoleFragment
  }
}
    ${RoleFragmentFragmentDoc}`;
export type RoleCreateMutationFn = Apollo.MutationFunction<RoleCreateMutation, RoleCreateMutationVariables>;

/**
 * __useRoleCreateMutation__
 *
 * To run a mutation, you first call `useRoleCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleCreateMutation, { data, loading, error }] = useRoleCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRoleCreateMutation(baseOptions?: Apollo.MutationHookOptions<RoleCreateMutation, RoleCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RoleCreateMutation, RoleCreateMutationVariables>(RoleCreateDocument, options);
      }
export type RoleCreateMutationHookResult = ReturnType<typeof useRoleCreateMutation>;
export type RoleCreateMutationResult = Apollo.MutationResult<RoleCreateMutation>;
export type RoleCreateMutationOptions = Apollo.BaseMutationOptions<RoleCreateMutation, RoleCreateMutationVariables>;
export const RoleUpdateDocument = gql`
    mutation RoleUpdate($id: ID!, $input: UpdateRole!) {
  roleUpdate(id: $id, input: $input) {
    ...RoleFragment
  }
}
    ${RoleFragmentFragmentDoc}`;
export type RoleUpdateMutationFn = Apollo.MutationFunction<RoleUpdateMutation, RoleUpdateMutationVariables>;

/**
 * __useRoleUpdateMutation__
 *
 * To run a mutation, you first call `useRoleUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleUpdateMutation, { data, loading, error }] = useRoleUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRoleUpdateMutation(baseOptions?: Apollo.MutationHookOptions<RoleUpdateMutation, RoleUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RoleUpdateMutation, RoleUpdateMutationVariables>(RoleUpdateDocument, options);
      }
export type RoleUpdateMutationHookResult = ReturnType<typeof useRoleUpdateMutation>;
export type RoleUpdateMutationResult = Apollo.MutationResult<RoleUpdateMutation>;
export type RoleUpdateMutationOptions = Apollo.BaseMutationOptions<RoleUpdateMutation, RoleUpdateMutationVariables>;
export const RoleFinalizeDocument = gql`
    mutation RoleFinalize($id: ID!) {
  roleFinalize(id: $id) {
    ...RoleFragment
  }
}
    ${RoleFragmentFragmentDoc}`;
export type RoleFinalizeMutationFn = Apollo.MutationFunction<RoleFinalizeMutation, RoleFinalizeMutationVariables>;

/**
 * __useRoleFinalizeMutation__
 *
 * To run a mutation, you first call `useRoleFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleFinalizeMutation, { data, loading, error }] = useRoleFinalizeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoleFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<RoleFinalizeMutation, RoleFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RoleFinalizeMutation, RoleFinalizeMutationVariables>(RoleFinalizeDocument, options);
      }
export type RoleFinalizeMutationHookResult = ReturnType<typeof useRoleFinalizeMutation>;
export type RoleFinalizeMutationResult = Apollo.MutationResult<RoleFinalizeMutation>;
export type RoleFinalizeMutationOptions = Apollo.BaseMutationOptions<RoleFinalizeMutation, RoleFinalizeMutationVariables>;
export const RoleArchiveDocument = gql`
    mutation RoleArchive($id: ID!) {
  roleArchive(id: $id) {
    ...RoleFragment
  }
}
    ${RoleFragmentFragmentDoc}`;
export type RoleArchiveMutationFn = Apollo.MutationFunction<RoleArchiveMutation, RoleArchiveMutationVariables>;

/**
 * __useRoleArchiveMutation__
 *
 * To run a mutation, you first call `useRoleArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleArchiveMutation, { data, loading, error }] = useRoleArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoleArchiveMutation(baseOptions?: Apollo.MutationHookOptions<RoleArchiveMutation, RoleArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RoleArchiveMutation, RoleArchiveMutationVariables>(RoleArchiveDocument, options);
      }
export type RoleArchiveMutationHookResult = ReturnType<typeof useRoleArchiveMutation>;
export type RoleArchiveMutationResult = Apollo.MutationResult<RoleArchiveMutation>;
export type RoleArchiveMutationOptions = Apollo.BaseMutationOptions<RoleArchiveMutation, RoleArchiveMutationVariables>;
export const RoleUnarchiveDocument = gql`
    mutation RoleUnarchive($id: ID!) {
  roleUnarchive(id: $id) {
    ...RoleFragment
  }
}
    ${RoleFragmentFragmentDoc}`;
export type RoleUnarchiveMutationFn = Apollo.MutationFunction<RoleUnarchiveMutation, RoleUnarchiveMutationVariables>;

/**
 * __useRoleUnarchiveMutation__
 *
 * To run a mutation, you first call `useRoleUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleUnarchiveMutation, { data, loading, error }] = useRoleUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoleUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<RoleUnarchiveMutation, RoleUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RoleUnarchiveMutation, RoleUnarchiveMutationVariables>(RoleUnarchiveDocument, options);
      }
export type RoleUnarchiveMutationHookResult = ReturnType<typeof useRoleUnarchiveMutation>;
export type RoleUnarchiveMutationResult = Apollo.MutationResult<RoleUnarchiveMutation>;
export type RoleUnarchiveMutationOptions = Apollo.BaseMutationOptions<RoleUnarchiveMutation, RoleUnarchiveMutationVariables>;
export const UsersDocument = gql`
    query Users($searchFilter: SearchFilter!, $roleID: ID) {
  users(search: $searchFilter, roleID: $roleID) {
    users {
      ...UserFragment
    }
    total
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      roleID: // value for 'roleID'
 *   },
 * });
 */
export function useUsersQuery(baseOptions: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UserDocument = gql`
    query User($id: ID, $handle: String) {
  user(id: $id, handle: $handle) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *      handle: // value for 'handle'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserCreateDocument = gql`
    mutation UserCreate($input: UpdateUser!) {
  userCreate(input: $input) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UserCreateMutationFn = Apollo.MutationFunction<UserCreateMutation, UserCreateMutationVariables>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserCreateMutation(baseOptions?: Apollo.MutationHookOptions<UserCreateMutation, UserCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserCreateMutation, UserCreateMutationVariables>(UserCreateDocument, options);
      }
export type UserCreateMutationHookResult = ReturnType<typeof useUserCreateMutation>;
export type UserCreateMutationResult = Apollo.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = Apollo.BaseMutationOptions<UserCreateMutation, UserCreateMutationVariables>;
export const UserUpdateDocument = gql`
    mutation UserUpdate($id: ID!, $input: UpdateUser!) {
  userUpdate(id: $id, input: $input) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UserUpdateMutationFn = Apollo.MutationFunction<UserUpdateMutation, UserUpdateMutationVariables>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserUpdateMutation(baseOptions?: Apollo.MutationHookOptions<UserUpdateMutation, UserUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(UserUpdateDocument, options);
      }
export type UserUpdateMutationHookResult = ReturnType<typeof useUserUpdateMutation>;
export type UserUpdateMutationResult = Apollo.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = Apollo.BaseMutationOptions<UserUpdateMutation, UserUpdateMutationVariables>;
export const UserArchiveDocument = gql`
    mutation UserArchive($id: ID!) {
  userArchive(id: $id) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UserArchiveMutationFn = Apollo.MutationFunction<UserArchiveMutation, UserArchiveMutationVariables>;

/**
 * __useUserArchiveMutation__
 *
 * To run a mutation, you first call `useUserArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userArchiveMutation, { data, loading, error }] = useUserArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserArchiveMutation(baseOptions?: Apollo.MutationHookOptions<UserArchiveMutation, UserArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserArchiveMutation, UserArchiveMutationVariables>(UserArchiveDocument, options);
      }
export type UserArchiveMutationHookResult = ReturnType<typeof useUserArchiveMutation>;
export type UserArchiveMutationResult = Apollo.MutationResult<UserArchiveMutation>;
export type UserArchiveMutationOptions = Apollo.BaseMutationOptions<UserArchiveMutation, UserArchiveMutationVariables>;
export const UserUnarchiveDocument = gql`
    mutation UserUnarchive($id: ID!) {
  userUnarchive(id: $id) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UserUnarchiveMutationFn = Apollo.MutationFunction<UserUnarchiveMutation, UserUnarchiveMutationVariables>;

/**
 * __useUserUnarchiveMutation__
 *
 * To run a mutation, you first call `useUserUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUnarchiveMutation, { data, loading, error }] = useUserUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<UserUnarchiveMutation, UserUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserUnarchiveMutation, UserUnarchiveMutationVariables>(UserUnarchiveDocument, options);
      }
export type UserUnarchiveMutationHookResult = ReturnType<typeof useUserUnarchiveMutation>;
export type UserUnarchiveMutationResult = Apollo.MutationResult<UserUnarchiveMutation>;
export type UserUnarchiveMutationOptions = Apollo.BaseMutationOptions<UserUnarchiveMutation, UserUnarchiveMutationVariables>;
export const FileUploadDocument = gql`
    mutation FileUpload($file: Upload!) {
  fileUpload(file: $file) {
    name
    url
  }
}
    `;
export type FileUploadMutationFn = Apollo.MutationFunction<FileUploadMutation, FileUploadMutationVariables>;

/**
 * __useFileUploadMutation__
 *
 * To run a mutation, you first call `useFileUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFileUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fileUploadMutation, { data, loading, error }] = useFileUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useFileUploadMutation(baseOptions?: Apollo.MutationHookOptions<FileUploadMutation, FileUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FileUploadMutation, FileUploadMutationVariables>(FileUploadDocument, options);
      }
export type FileUploadMutationHookResult = ReturnType<typeof useFileUploadMutation>;
export type FileUploadMutationResult = Apollo.MutationResult<FileUploadMutation>;
export type FileUploadMutationOptions = Apollo.BaseMutationOptions<FileUploadMutation, FileUploadMutationVariables>;
export const FileUploadMultipleDocument = gql`
    mutation FileUploadMultiple($files: [Upload!]!) {
  fileUploadMultiple(files: $files) {
    name
    url
  }
}
    `;
export type FileUploadMultipleMutationFn = Apollo.MutationFunction<FileUploadMultipleMutation, FileUploadMultipleMutationVariables>;

/**
 * __useFileUploadMultipleMutation__
 *
 * To run a mutation, you first call `useFileUploadMultipleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFileUploadMultipleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fileUploadMultipleMutation, { data, loading, error }] = useFileUploadMultipleMutation({
 *   variables: {
 *      files: // value for 'files'
 *   },
 * });
 */
export function useFileUploadMultipleMutation(baseOptions?: Apollo.MutationHookOptions<FileUploadMultipleMutation, FileUploadMultipleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FileUploadMultipleMutation, FileUploadMultipleMutationVariables>(FileUploadMultipleDocument, options);
      }
export type FileUploadMultipleMutationHookResult = ReturnType<typeof useFileUploadMultipleMutation>;
export type FileUploadMultipleMutationResult = Apollo.MutationResult<FileUploadMultipleMutation>;
export type FileUploadMultipleMutationOptions = Apollo.BaseMutationOptions<FileUploadMultipleMutation, FileUploadMultipleMutationVariables>;
export const BatchesDocument = gql`
    query Batches($searchFilter: SearchFilter!, $skuID: ID) {
  batches(search: $searchFilter, skuID: $skuID) {
    batches {
      ...BatchFragment
    }
    total
  }
}
    ${BatchFragmentFragmentDoc}`;

/**
 * __useBatchesQuery__
 *
 * To run a query within a React component, call `useBatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBatchesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      skuID: // value for 'skuID'
 *   },
 * });
 */
export function useBatchesQuery(baseOptions: Apollo.QueryHookOptions<BatchesQuery, BatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BatchesQuery, BatchesQueryVariables>(BatchesDocument, options);
      }
export function useBatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BatchesQuery, BatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BatchesQuery, BatchesQueryVariables>(BatchesDocument, options);
        }
export type BatchesQueryHookResult = ReturnType<typeof useBatchesQuery>;
export type BatchesLazyQueryHookResult = ReturnType<typeof useBatchesLazyQuery>;
export type BatchesQueryResult = Apollo.QueryResult<BatchesQuery, BatchesQueryVariables>;
export const BatchDocument = gql`
    query Batch($id: ID, $uid: UUID, $code: String) {
  batch(id: $id, uid: $uid, code: $code) {
    ...BatchFragment
  }
}
    ${BatchFragmentFragmentDoc}`;

/**
 * __useBatchQuery__
 *
 * To run a query within a React component, call `useBatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useBatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBatchQuery({
 *   variables: {
 *      id: // value for 'id'
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useBatchQuery(baseOptions?: Apollo.QueryHookOptions<BatchQuery, BatchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BatchQuery, BatchQueryVariables>(BatchDocument, options);
      }
export function useBatchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BatchQuery, BatchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BatchQuery, BatchQueryVariables>(BatchDocument, options);
        }
export type BatchQueryHookResult = ReturnType<typeof useBatchQuery>;
export type BatchLazyQueryHookResult = ReturnType<typeof useBatchLazyQuery>;
export type BatchQueryResult = Apollo.QueryResult<BatchQuery, BatchQueryVariables>;
export const BatchCreateDocument = gql`
    mutation BatchCreate($input: UpdateBatch!) {
  batchCreate(input: $input) {
    ...BatchFragment
  }
}
    ${BatchFragmentFragmentDoc}`;
export type BatchCreateMutationFn = Apollo.MutationFunction<BatchCreateMutation, BatchCreateMutationVariables>;

/**
 * __useBatchCreateMutation__
 *
 * To run a mutation, you first call `useBatchCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBatchCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [batchCreateMutation, { data, loading, error }] = useBatchCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBatchCreateMutation(baseOptions?: Apollo.MutationHookOptions<BatchCreateMutation, BatchCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BatchCreateMutation, BatchCreateMutationVariables>(BatchCreateDocument, options);
      }
export type BatchCreateMutationHookResult = ReturnType<typeof useBatchCreateMutation>;
export type BatchCreateMutationResult = Apollo.MutationResult<BatchCreateMutation>;
export type BatchCreateMutationOptions = Apollo.BaseMutationOptions<BatchCreateMutation, BatchCreateMutationVariables>;
export const BatchUpdateDocument = gql`
    mutation BatchUpdate($id: ID!, $input: UpdateBatch!) {
  batchUpdate(id: $id, input: $input) {
    ...BatchFragment
  }
}
    ${BatchFragmentFragmentDoc}`;
export type BatchUpdateMutationFn = Apollo.MutationFunction<BatchUpdateMutation, BatchUpdateMutationVariables>;

/**
 * __useBatchUpdateMutation__
 *
 * To run a mutation, you first call `useBatchUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBatchUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [batchUpdateMutation, { data, loading, error }] = useBatchUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBatchUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BatchUpdateMutation, BatchUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BatchUpdateMutation, BatchUpdateMutationVariables>(BatchUpdateDocument, options);
      }
export type BatchUpdateMutationHookResult = ReturnType<typeof useBatchUpdateMutation>;
export type BatchUpdateMutationResult = Apollo.MutationResult<BatchUpdateMutation>;
export type BatchUpdateMutationOptions = Apollo.BaseMutationOptions<BatchUpdateMutation, BatchUpdateMutationVariables>;
export const BatchArchiveDocument = gql`
    mutation BatchArchive($id: ID!) {
  batchArchive(id: $id) {
    ...BatchFragment
  }
}
    ${BatchFragmentFragmentDoc}`;
export type BatchArchiveMutationFn = Apollo.MutationFunction<BatchArchiveMutation, BatchArchiveMutationVariables>;

/**
 * __useBatchArchiveMutation__
 *
 * To run a mutation, you first call `useBatchArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBatchArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [batchArchiveMutation, { data, loading, error }] = useBatchArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBatchArchiveMutation(baseOptions?: Apollo.MutationHookOptions<BatchArchiveMutation, BatchArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BatchArchiveMutation, BatchArchiveMutationVariables>(BatchArchiveDocument, options);
      }
export type BatchArchiveMutationHookResult = ReturnType<typeof useBatchArchiveMutation>;
export type BatchArchiveMutationResult = Apollo.MutationResult<BatchArchiveMutation>;
export type BatchArchiveMutationOptions = Apollo.BaseMutationOptions<BatchArchiveMutation, BatchArchiveMutationVariables>;
export const BatchUnarchiveDocument = gql`
    mutation BatchUnarchive($id: ID!) {
  batchUnarchive(id: $id) {
    ...BatchFragment
  }
}
    ${BatchFragmentFragmentDoc}`;
export type BatchUnarchiveMutationFn = Apollo.MutationFunction<BatchUnarchiveMutation, BatchUnarchiveMutationVariables>;

/**
 * __useBatchUnarchiveMutation__
 *
 * To run a mutation, you first call `useBatchUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBatchUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [batchUnarchiveMutation, { data, loading, error }] = useBatchUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBatchUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<BatchUnarchiveMutation, BatchUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BatchUnarchiveMutation, BatchUnarchiveMutationVariables>(BatchUnarchiveDocument, options);
      }
export type BatchUnarchiveMutationHookResult = ReturnType<typeof useBatchUnarchiveMutation>;
export type BatchUnarchiveMutationResult = Apollo.MutationResult<BatchUnarchiveMutation>;
export type BatchUnarchiveMutationOptions = Apollo.BaseMutationOptions<BatchUnarchiveMutation, BatchUnarchiveMutationVariables>;
export const CartonsDocument = gql`
    query Cartons($searchFilter: SearchFilter!, $skuUID: UUID, $batchUID: UUID) {
  cartons(search: $searchFilter, skuUID: $skuUID, batchUID: $batchUID) {
    cartons {
      ...CartonFragment
    }
    total
  }
}
    ${CartonFragmentFragmentDoc}`;

/**
 * __useCartonsQuery__
 *
 * To run a query within a React component, call `useCartonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartonsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      skuUID: // value for 'skuUID'
 *      batchUID: // value for 'batchUID'
 *   },
 * });
 */
export function useCartonsQuery(baseOptions: Apollo.QueryHookOptions<CartonsQuery, CartonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CartonsQuery, CartonsQueryVariables>(CartonsDocument, options);
      }
export function useCartonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartonsQuery, CartonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CartonsQuery, CartonsQueryVariables>(CartonsDocument, options);
        }
export type CartonsQueryHookResult = ReturnType<typeof useCartonsQuery>;
export type CartonsLazyQueryHookResult = ReturnType<typeof useCartonsLazyQuery>;
export type CartonsQueryResult = Apollo.QueryResult<CartonsQuery, CartonsQueryVariables>;
export const CartonDocument = gql`
    query Carton($id: ID, $uid: UUID, $code: String) {
  carton(id: $id, uid: $uid, code: $code) {
    ...CartonFragment
  }
}
    ${CartonFragmentFragmentDoc}`;

/**
 * __useCartonQuery__
 *
 * To run a query within a React component, call `useCartonQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartonQuery({
 *   variables: {
 *      id: // value for 'id'
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCartonQuery(baseOptions?: Apollo.QueryHookOptions<CartonQuery, CartonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CartonQuery, CartonQueryVariables>(CartonDocument, options);
      }
export function useCartonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartonQuery, CartonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CartonQuery, CartonQueryVariables>(CartonDocument, options);
        }
export type CartonQueryHookResult = ReturnType<typeof useCartonQuery>;
export type CartonLazyQueryHookResult = ReturnType<typeof useCartonLazyQuery>;
export type CartonQueryResult = Apollo.QueryResult<CartonQuery, CartonQueryVariables>;
export const CartonUpdateDocument = gql`
    mutation CartonUpdate($id: ID!, $input: UpdateCarton!) {
  cartonUpdate(id: $id, input: $input) {
    ...CartonFragment
  }
}
    ${CartonFragmentFragmentDoc}`;
export type CartonUpdateMutationFn = Apollo.MutationFunction<CartonUpdateMutation, CartonUpdateMutationVariables>;

/**
 * __useCartonUpdateMutation__
 *
 * To run a mutation, you first call `useCartonUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCartonUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cartonUpdateMutation, { data, loading, error }] = useCartonUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCartonUpdateMutation(baseOptions?: Apollo.MutationHookOptions<CartonUpdateMutation, CartonUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CartonUpdateMutation, CartonUpdateMutationVariables>(CartonUpdateDocument, options);
      }
export type CartonUpdateMutationHookResult = ReturnType<typeof useCartonUpdateMutation>;
export type CartonUpdateMutationResult = Apollo.MutationResult<CartonUpdateMutation>;
export type CartonUpdateMutationOptions = Apollo.BaseMutationOptions<CartonUpdateMutation, CartonUpdateMutationVariables>;
export const CartonArchiveDocument = gql`
    mutation CartonArchive($id: ID!) {
  cartonArchive(id: $id) {
    ...CartonFragment
  }
}
    ${CartonFragmentFragmentDoc}`;
export type CartonArchiveMutationFn = Apollo.MutationFunction<CartonArchiveMutation, CartonArchiveMutationVariables>;

/**
 * __useCartonArchiveMutation__
 *
 * To run a mutation, you first call `useCartonArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCartonArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cartonArchiveMutation, { data, loading, error }] = useCartonArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCartonArchiveMutation(baseOptions?: Apollo.MutationHookOptions<CartonArchiveMutation, CartonArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CartonArchiveMutation, CartonArchiveMutationVariables>(CartonArchiveDocument, options);
      }
export type CartonArchiveMutationHookResult = ReturnType<typeof useCartonArchiveMutation>;
export type CartonArchiveMutationResult = Apollo.MutationResult<CartonArchiveMutation>;
export type CartonArchiveMutationOptions = Apollo.BaseMutationOptions<CartonArchiveMutation, CartonArchiveMutationVariables>;
export const CartonUnarchiveDocument = gql`
    mutation CartonUnarchive($id: ID!) {
  cartonUnarchive(id: $id) {
    ...CartonFragment
  }
}
    ${CartonFragmentFragmentDoc}`;
export type CartonUnarchiveMutationFn = Apollo.MutationFunction<CartonUnarchiveMutation, CartonUnarchiveMutationVariables>;

/**
 * __useCartonUnarchiveMutation__
 *
 * To run a mutation, you first call `useCartonUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCartonUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cartonUnarchiveMutation, { data, loading, error }] = useCartonUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCartonUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<CartonUnarchiveMutation, CartonUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CartonUnarchiveMutation, CartonUnarchiveMutationVariables>(CartonUnarchiveDocument, options);
      }
export type CartonUnarchiveMutationHookResult = ReturnType<typeof useCartonUnarchiveMutation>;
export type CartonUnarchiveMutationResult = Apollo.MutationResult<CartonUnarchiveMutation>;
export type CartonUnarchiveMutationOptions = Apollo.BaseMutationOptions<CartonUnarchiveMutation, CartonUnarchiveMutationVariables>;
export const CartonTransferLogsDocument = gql`
    query CartonTransferLogs($searchFilter: SearchFilter!, $cartonUID: UUID!) {
  cartonTransferLogs(search: $searchFilter, cartonUID: $cartonUID) {
    cartonTransferLogs {
      ...CartonTransferLogFragment
    }
    total
  }
}
    ${CartonTransferLogFragmentFragmentDoc}`;

/**
 * __useCartonTransferLogsQuery__
 *
 * To run a query within a React component, call `useCartonTransferLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartonTransferLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartonTransferLogsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      cartonUID: // value for 'cartonUID'
 *   },
 * });
 */
export function useCartonTransferLogsQuery(baseOptions: Apollo.QueryHookOptions<CartonTransferLogsQuery, CartonTransferLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CartonTransferLogsQuery, CartonTransferLogsQueryVariables>(CartonTransferLogsDocument, options);
      }
export function useCartonTransferLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartonTransferLogsQuery, CartonTransferLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CartonTransferLogsQuery, CartonTransferLogsQueryVariables>(CartonTransferLogsDocument, options);
        }
export type CartonTransferLogsQueryHookResult = ReturnType<typeof useCartonTransferLogsQuery>;
export type CartonTransferLogsLazyQueryHookResult = ReturnType<typeof useCartonTransferLogsLazyQuery>;
export type CartonTransferLogsQueryResult = Apollo.QueryResult<CartonTransferLogsQuery, CartonTransferLogsQueryVariables>;
export const CartonTrackerLogsDocument = gql`
    query CartonTrackerLogs($searchFilter: SearchFilter!, $cartonUID: UUID!) {
  cartonTrackerLogs(search: $searchFilter, cartonUID: $cartonUID) {
    cartonTrackerLogs {
      ...CartonTrackerLogFragment
    }
    total
  }
}
    ${CartonTrackerLogFragmentFragmentDoc}`;

/**
 * __useCartonTrackerLogsQuery__
 *
 * To run a query within a React component, call `useCartonTrackerLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartonTrackerLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartonTrackerLogsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      cartonUID: // value for 'cartonUID'
 *   },
 * });
 */
export function useCartonTrackerLogsQuery(baseOptions: Apollo.QueryHookOptions<CartonTrackerLogsQuery, CartonTrackerLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CartonTrackerLogsQuery, CartonTrackerLogsQueryVariables>(CartonTrackerLogsDocument, options);
      }
export function useCartonTrackerLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartonTrackerLogsQuery, CartonTrackerLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CartonTrackerLogsQuery, CartonTrackerLogsQueryVariables>(CartonTrackerLogsDocument, options);
        }
export type CartonTrackerLogsQueryHookResult = ReturnType<typeof useCartonTrackerLogsQuery>;
export type CartonTrackerLogsLazyQueryHookResult = ReturnType<typeof useCartonTrackerLogsLazyQuery>;
export type CartonTrackerLogsQueryResult = Apollo.QueryResult<CartonTrackerLogsQuery, CartonTrackerLogsQueryVariables>;
export const ContainersDocument = gql`
    query Containers($searchFilter: SearchFilter!) {
  containers(search: $searchFilter) {
    containers {
      ...ContainerFragment
    }
    total
  }
}
    ${ContainerFragmentFragmentDoc}`;

/**
 * __useContainersQuery__
 *
 * To run a query within a React component, call `useContainersQuery` and pass it any options that fit your needs.
 * When your component renders, `useContainersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContainersQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function useContainersQuery(baseOptions: Apollo.QueryHookOptions<ContainersQuery, ContainersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContainersQuery, ContainersQueryVariables>(ContainersDocument, options);
      }
export function useContainersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContainersQuery, ContainersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContainersQuery, ContainersQueryVariables>(ContainersDocument, options);
        }
export type ContainersQueryHookResult = ReturnType<typeof useContainersQuery>;
export type ContainersLazyQueryHookResult = ReturnType<typeof useContainersLazyQuery>;
export type ContainersQueryResult = Apollo.QueryResult<ContainersQuery, ContainersQueryVariables>;
export const ContainerDocument = gql`
    query Container($id: ID, $uid: UUID, $code: String) {
  container(id: $id, uid: $uid, code: $code) {
    ...ContainerFragment
  }
}
    ${ContainerFragmentFragmentDoc}`;

/**
 * __useContainerQuery__
 *
 * To run a query within a React component, call `useContainerQuery` and pass it any options that fit your needs.
 * When your component renders, `useContainerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContainerQuery({
 *   variables: {
 *      id: // value for 'id'
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useContainerQuery(baseOptions?: Apollo.QueryHookOptions<ContainerQuery, ContainerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContainerQuery, ContainerQueryVariables>(ContainerDocument, options);
      }
export function useContainerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContainerQuery, ContainerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContainerQuery, ContainerQueryVariables>(ContainerDocument, options);
        }
export type ContainerQueryHookResult = ReturnType<typeof useContainerQuery>;
export type ContainerLazyQueryHookResult = ReturnType<typeof useContainerLazyQuery>;
export type ContainerQueryResult = Apollo.QueryResult<ContainerQuery, ContainerQueryVariables>;
export const ContainerUpdateDocument = gql`
    mutation ContainerUpdate($id: ID!, $input: UpdateContainer!) {
  containerUpdate(id: $id, input: $input) {
    ...ContainerFragment
  }
}
    ${ContainerFragmentFragmentDoc}`;
export type ContainerUpdateMutationFn = Apollo.MutationFunction<ContainerUpdateMutation, ContainerUpdateMutationVariables>;

/**
 * __useContainerUpdateMutation__
 *
 * To run a mutation, you first call `useContainerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContainerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [containerUpdateMutation, { data, loading, error }] = useContainerUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContainerUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ContainerUpdateMutation, ContainerUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContainerUpdateMutation, ContainerUpdateMutationVariables>(ContainerUpdateDocument, options);
      }
export type ContainerUpdateMutationHookResult = ReturnType<typeof useContainerUpdateMutation>;
export type ContainerUpdateMutationResult = Apollo.MutationResult<ContainerUpdateMutation>;
export type ContainerUpdateMutationOptions = Apollo.BaseMutationOptions<ContainerUpdateMutation, ContainerUpdateMutationVariables>;
export const ContainerArchiveDocument = gql`
    mutation ContainerArchive($id: ID!) {
  containerArchive(id: $id) {
    ...ContainerFragment
  }
}
    ${ContainerFragmentFragmentDoc}`;
export type ContainerArchiveMutationFn = Apollo.MutationFunction<ContainerArchiveMutation, ContainerArchiveMutationVariables>;

/**
 * __useContainerArchiveMutation__
 *
 * To run a mutation, you first call `useContainerArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContainerArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [containerArchiveMutation, { data, loading, error }] = useContainerArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContainerArchiveMutation(baseOptions?: Apollo.MutationHookOptions<ContainerArchiveMutation, ContainerArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContainerArchiveMutation, ContainerArchiveMutationVariables>(ContainerArchiveDocument, options);
      }
export type ContainerArchiveMutationHookResult = ReturnType<typeof useContainerArchiveMutation>;
export type ContainerArchiveMutationResult = Apollo.MutationResult<ContainerArchiveMutation>;
export type ContainerArchiveMutationOptions = Apollo.BaseMutationOptions<ContainerArchiveMutation, ContainerArchiveMutationVariables>;
export const ContainerUnarchiveDocument = gql`
    mutation ContainerUnarchive($id: ID!) {
  containerUnarchive(id: $id) {
    ...ContainerFragment
  }
}
    ${ContainerFragmentFragmentDoc}`;
export type ContainerUnarchiveMutationFn = Apollo.MutationFunction<ContainerUnarchiveMutation, ContainerUnarchiveMutationVariables>;

/**
 * __useContainerUnarchiveMutation__
 *
 * To run a mutation, you first call `useContainerUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContainerUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [containerUnarchiveMutation, { data, loading, error }] = useContainerUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContainerUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<ContainerUnarchiveMutation, ContainerUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContainerUnarchiveMutation, ContainerUnarchiveMutationVariables>(ContainerUnarchiveDocument, options);
      }
export type ContainerUnarchiveMutationHookResult = ReturnType<typeof useContainerUnarchiveMutation>;
export type ContainerUnarchiveMutationResult = Apollo.MutationResult<ContainerUnarchiveMutation>;
export type ContainerUnarchiveMutationOptions = Apollo.BaseMutationOptions<ContainerUnarchiveMutation, ContainerUnarchiveMutationVariables>;
export const ContainerTransferLogsDocument = gql`
    query ContainerTransferLogs($searchFilter: SearchFilter!, $containerUID: UUID!) {
  containerTransferLogs(search: $searchFilter, containerUID: $containerUID) {
    containerTransferLogs {
      ...ContainerTransferLogFragment
    }
    total
  }
}
    ${ContainerTransferLogFragmentFragmentDoc}`;

/**
 * __useContainerTransferLogsQuery__
 *
 * To run a query within a React component, call `useContainerTransferLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContainerTransferLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContainerTransferLogsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      containerUID: // value for 'containerUID'
 *   },
 * });
 */
export function useContainerTransferLogsQuery(baseOptions: Apollo.QueryHookOptions<ContainerTransferLogsQuery, ContainerTransferLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContainerTransferLogsQuery, ContainerTransferLogsQueryVariables>(ContainerTransferLogsDocument, options);
      }
export function useContainerTransferLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContainerTransferLogsQuery, ContainerTransferLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContainerTransferLogsQuery, ContainerTransferLogsQueryVariables>(ContainerTransferLogsDocument, options);
        }
export type ContainerTransferLogsQueryHookResult = ReturnType<typeof useContainerTransferLogsQuery>;
export type ContainerTransferLogsLazyQueryHookResult = ReturnType<typeof useContainerTransferLogsLazyQuery>;
export type ContainerTransferLogsQueryResult = Apollo.QueryResult<ContainerTransferLogsQuery, ContainerTransferLogsQueryVariables>;
export const ContainerTrackerLogsDocument = gql`
    query ContainerTrackerLogs($searchFilter: SearchFilter!, $containerUID: UUID!) {
  containerTrackerLogs(search: $searchFilter, containerUID: $containerUID) {
    containerTrackerLogs {
      ...ContainerTrackerLogFragment
    }
    total
  }
}
    ${ContainerTrackerLogFragmentFragmentDoc}`;

/**
 * __useContainerTrackerLogsQuery__
 *
 * To run a query within a React component, call `useContainerTrackerLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContainerTrackerLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContainerTrackerLogsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      containerUID: // value for 'containerUID'
 *   },
 * });
 */
export function useContainerTrackerLogsQuery(baseOptions: Apollo.QueryHookOptions<ContainerTrackerLogsQuery, ContainerTrackerLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContainerTrackerLogsQuery, ContainerTrackerLogsQueryVariables>(ContainerTrackerLogsDocument, options);
      }
export function useContainerTrackerLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContainerTrackerLogsQuery, ContainerTrackerLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContainerTrackerLogsQuery, ContainerTrackerLogsQueryVariables>(ContainerTrackerLogsDocument, options);
        }
export type ContainerTrackerLogsQueryHookResult = ReturnType<typeof useContainerTrackerLogsQuery>;
export type ContainerTrackerLogsLazyQueryHookResult = ReturnType<typeof useContainerTrackerLogsLazyQuery>;
export type ContainerTrackerLogsQueryResult = Apollo.QueryResult<ContainerTrackerLogsQuery, ContainerTrackerLogsQueryVariables>;
export const PalletsDocument = gql`
    query Pallets($searchFilter: SearchFilter!) {
  pallets(search: $searchFilter) {
    pallets {
      ...PalletFragment
    }
    total
  }
}
    ${PalletFragmentFragmentDoc}`;

/**
 * __usePalletsQuery__
 *
 * To run a query within a React component, call `usePalletsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePalletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePalletsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function usePalletsQuery(baseOptions: Apollo.QueryHookOptions<PalletsQuery, PalletsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PalletsQuery, PalletsQueryVariables>(PalletsDocument, options);
      }
export function usePalletsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PalletsQuery, PalletsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PalletsQuery, PalletsQueryVariables>(PalletsDocument, options);
        }
export type PalletsQueryHookResult = ReturnType<typeof usePalletsQuery>;
export type PalletsLazyQueryHookResult = ReturnType<typeof usePalletsLazyQuery>;
export type PalletsQueryResult = Apollo.QueryResult<PalletsQuery, PalletsQueryVariables>;
export const PalletDocument = gql`
    query Pallet($id: ID, $uid: UUID, $code: String) {
  pallet(id: $id, uid: $uid, code: $code) {
    ...PalletFragment
  }
}
    ${PalletFragmentFragmentDoc}`;

/**
 * __usePalletQuery__
 *
 * To run a query within a React component, call `usePalletQuery` and pass it any options that fit your needs.
 * When your component renders, `usePalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePalletQuery({
 *   variables: {
 *      id: // value for 'id'
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function usePalletQuery(baseOptions?: Apollo.QueryHookOptions<PalletQuery, PalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PalletQuery, PalletQueryVariables>(PalletDocument, options);
      }
export function usePalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PalletQuery, PalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PalletQuery, PalletQueryVariables>(PalletDocument, options);
        }
export type PalletQueryHookResult = ReturnType<typeof usePalletQuery>;
export type PalletLazyQueryHookResult = ReturnType<typeof usePalletLazyQuery>;
export type PalletQueryResult = Apollo.QueryResult<PalletQuery, PalletQueryVariables>;
export const PalletUpdateDocument = gql`
    mutation PalletUpdate($id: ID!, $input: UpdatePallet!) {
  palletUpdate(id: $id, input: $input) {
    ...PalletFragment
  }
}
    ${PalletFragmentFragmentDoc}`;
export type PalletUpdateMutationFn = Apollo.MutationFunction<PalletUpdateMutation, PalletUpdateMutationVariables>;

/**
 * __usePalletUpdateMutation__
 *
 * To run a mutation, you first call `usePalletUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePalletUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [palletUpdateMutation, { data, loading, error }] = usePalletUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePalletUpdateMutation(baseOptions?: Apollo.MutationHookOptions<PalletUpdateMutation, PalletUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PalletUpdateMutation, PalletUpdateMutationVariables>(PalletUpdateDocument, options);
      }
export type PalletUpdateMutationHookResult = ReturnType<typeof usePalletUpdateMutation>;
export type PalletUpdateMutationResult = Apollo.MutationResult<PalletUpdateMutation>;
export type PalletUpdateMutationOptions = Apollo.BaseMutationOptions<PalletUpdateMutation, PalletUpdateMutationVariables>;
export const PalletArchiveDocument = gql`
    mutation PalletArchive($id: ID!) {
  palletArchive(id: $id) {
    ...PalletFragment
  }
}
    ${PalletFragmentFragmentDoc}`;
export type PalletArchiveMutationFn = Apollo.MutationFunction<PalletArchiveMutation, PalletArchiveMutationVariables>;

/**
 * __usePalletArchiveMutation__
 *
 * To run a mutation, you first call `usePalletArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePalletArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [palletArchiveMutation, { data, loading, error }] = usePalletArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePalletArchiveMutation(baseOptions?: Apollo.MutationHookOptions<PalletArchiveMutation, PalletArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PalletArchiveMutation, PalletArchiveMutationVariables>(PalletArchiveDocument, options);
      }
export type PalletArchiveMutationHookResult = ReturnType<typeof usePalletArchiveMutation>;
export type PalletArchiveMutationResult = Apollo.MutationResult<PalletArchiveMutation>;
export type PalletArchiveMutationOptions = Apollo.BaseMutationOptions<PalletArchiveMutation, PalletArchiveMutationVariables>;
export const PalletUnarchiveDocument = gql`
    mutation PalletUnarchive($id: ID!) {
  palletUnarchive(id: $id) {
    ...PalletFragment
  }
}
    ${PalletFragmentFragmentDoc}`;
export type PalletUnarchiveMutationFn = Apollo.MutationFunction<PalletUnarchiveMutation, PalletUnarchiveMutationVariables>;

/**
 * __usePalletUnarchiveMutation__
 *
 * To run a mutation, you first call `usePalletUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePalletUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [palletUnarchiveMutation, { data, loading, error }] = usePalletUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePalletUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<PalletUnarchiveMutation, PalletUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PalletUnarchiveMutation, PalletUnarchiveMutationVariables>(PalletUnarchiveDocument, options);
      }
export type PalletUnarchiveMutationHookResult = ReturnType<typeof usePalletUnarchiveMutation>;
export type PalletUnarchiveMutationResult = Apollo.MutationResult<PalletUnarchiveMutation>;
export type PalletUnarchiveMutationOptions = Apollo.BaseMutationOptions<PalletUnarchiveMutation, PalletUnarchiveMutationVariables>;
export const PalletTransferLogsDocument = gql`
    query PalletTransferLogs($searchFilter: SearchFilter!, $palletUID: UUID!) {
  palletTransferLogs(search: $searchFilter, palletUID: $palletUID) {
    palletTransferLogs {
      ...PalletTransferLogFragment
    }
    total
  }
}
    ${PalletTransferLogFragmentFragmentDoc}`;

/**
 * __usePalletTransferLogsQuery__
 *
 * To run a query within a React component, call `usePalletTransferLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePalletTransferLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePalletTransferLogsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      palletUID: // value for 'palletUID'
 *   },
 * });
 */
export function usePalletTransferLogsQuery(baseOptions: Apollo.QueryHookOptions<PalletTransferLogsQuery, PalletTransferLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PalletTransferLogsQuery, PalletTransferLogsQueryVariables>(PalletTransferLogsDocument, options);
      }
export function usePalletTransferLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PalletTransferLogsQuery, PalletTransferLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PalletTransferLogsQuery, PalletTransferLogsQueryVariables>(PalletTransferLogsDocument, options);
        }
export type PalletTransferLogsQueryHookResult = ReturnType<typeof usePalletTransferLogsQuery>;
export type PalletTransferLogsLazyQueryHookResult = ReturnType<typeof usePalletTransferLogsLazyQuery>;
export type PalletTransferLogsQueryResult = Apollo.QueryResult<PalletTransferLogsQuery, PalletTransferLogsQueryVariables>;
export const PalletTrackerLogsDocument = gql`
    query PalletTrackerLogs($searchFilter: SearchFilter!, $palletUID: UUID!) {
  palletTrackerLogs(search: $searchFilter, palletUID: $palletUID) {
    palletTrackerLogs {
      ...PalletTrackerLogFragment
    }
    total
  }
}
    ${PalletTrackerLogFragmentFragmentDoc}`;

/**
 * __usePalletTrackerLogsQuery__
 *
 * To run a query within a React component, call `usePalletTrackerLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePalletTrackerLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePalletTrackerLogsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      palletUID: // value for 'palletUID'
 *   },
 * });
 */
export function usePalletTrackerLogsQuery(baseOptions: Apollo.QueryHookOptions<PalletTrackerLogsQuery, PalletTrackerLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PalletTrackerLogsQuery, PalletTrackerLogsQueryVariables>(PalletTrackerLogsDocument, options);
      }
export function usePalletTrackerLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PalletTrackerLogsQuery, PalletTrackerLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PalletTrackerLogsQuery, PalletTrackerLogsQueryVariables>(PalletTrackerLogsDocument, options);
        }
export type PalletTrackerLogsQueryHookResult = ReturnType<typeof usePalletTrackerLogsQuery>;
export type PalletTrackerLogsLazyQueryHookResult = ReturnType<typeof usePalletTrackerLogsLazyQuery>;
export type PalletTrackerLogsQueryResult = Apollo.QueryResult<PalletTrackerLogsQuery, PalletTrackerLogsQueryVariables>;
export const QrOrdersDocument = gql`
    query QROrders($searchFilter: SearchFilter!, $objectType: String) {
  qrOrders(search: $searchFilter, objectType: $objectType) {
    qrOrders {
      ...QROrderFragment
    }
    total
  }
}
    ${QrOrderFragmentFragmentDoc}`;

/**
 * __useQrOrdersQuery__
 *
 * To run a query within a React component, call `useQrOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useQrOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQrOrdersQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      objectType: // value for 'objectType'
 *   },
 * });
 */
export function useQrOrdersQuery(baseOptions: Apollo.QueryHookOptions<QrOrdersQuery, QrOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QrOrdersQuery, QrOrdersQueryVariables>(QrOrdersDocument, options);
      }
export function useQrOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QrOrdersQuery, QrOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QrOrdersQuery, QrOrdersQueryVariables>(QrOrdersDocument, options);
        }
export type QrOrdersQueryHookResult = ReturnType<typeof useQrOrdersQuery>;
export type QrOrdersLazyQueryHookResult = ReturnType<typeof useQrOrdersLazyQuery>;
export type QrOrdersQueryResult = Apollo.QueryResult<QrOrdersQuery, QrOrdersQueryVariables>;
export const QrOrderObjectsDocument = gql`
    query QROrderObjects($searchFilter: SearchFilter!, $qrOrderUID: UUID!) {
  qrOrderObjects(search: $searchFilter, qrOrderUID: $qrOrderUID) {
    qrOrderObjects {
      ...QROrderObjectFragment
    }
    total
  }
}
    ${QrOrderObjectFragmentFragmentDoc}`;

/**
 * __useQrOrderObjectsQuery__
 *
 * To run a query within a React component, call `useQrOrderObjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQrOrderObjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQrOrderObjectsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      qrOrderUID: // value for 'qrOrderUID'
 *   },
 * });
 */
export function useQrOrderObjectsQuery(baseOptions: Apollo.QueryHookOptions<QrOrderObjectsQuery, QrOrderObjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QrOrderObjectsQuery, QrOrderObjectsQueryVariables>(QrOrderObjectsDocument, options);
      }
export function useQrOrderObjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QrOrderObjectsQuery, QrOrderObjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QrOrderObjectsQuery, QrOrderObjectsQueryVariables>(QrOrderObjectsDocument, options);
        }
export type QrOrderObjectsQueryHookResult = ReturnType<typeof useQrOrderObjectsQuery>;
export type QrOrderObjectsLazyQueryHookResult = ReturnType<typeof useQrOrderObjectsLazyQuery>;
export type QrOrderObjectsQueryResult = Apollo.QueryResult<QrOrderObjectsQuery, QrOrderObjectsQueryVariables>;
export const QrOrderDocument = gql`
    query QROrder($id: ID, $code: String) {
  qrOrder(id: $id, code: $code) {
    ...QROrderFragment
  }
}
    ${QrOrderFragmentFragmentDoc}`;

/**
 * __useQrOrderQuery__
 *
 * To run a query within a React component, call `useQrOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useQrOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQrOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useQrOrderQuery(baseOptions?: Apollo.QueryHookOptions<QrOrderQuery, QrOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QrOrderQuery, QrOrderQueryVariables>(QrOrderDocument, options);
      }
export function useQrOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QrOrderQuery, QrOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QrOrderQuery, QrOrderQueryVariables>(QrOrderDocument, options);
        }
export type QrOrderQueryHookResult = ReturnType<typeof useQrOrderQuery>;
export type QrOrderLazyQueryHookResult = ReturnType<typeof useQrOrderLazyQuery>;
export type QrOrderQueryResult = Apollo.QueryResult<QrOrderQuery, QrOrderQueryVariables>;
export const QrOrderCreateDocument = gql`
    mutation QROrderCreate($input: UpdateQROrder!) {
  qrOrderCreate(input: $input) {
    ...QROrderFragment
  }
}
    ${QrOrderFragmentFragmentDoc}`;
export type QrOrderCreateMutationFn = Apollo.MutationFunction<QrOrderCreateMutation, QrOrderCreateMutationVariables>;

/**
 * __useQrOrderCreateMutation__
 *
 * To run a mutation, you first call `useQrOrderCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQrOrderCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [qrOrderCreateMutation, { data, loading, error }] = useQrOrderCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useQrOrderCreateMutation(baseOptions?: Apollo.MutationHookOptions<QrOrderCreateMutation, QrOrderCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<QrOrderCreateMutation, QrOrderCreateMutationVariables>(QrOrderCreateDocument, options);
      }
export type QrOrderCreateMutationHookResult = ReturnType<typeof useQrOrderCreateMutation>;
export type QrOrderCreateMutationResult = Apollo.MutationResult<QrOrderCreateMutation>;
export type QrOrderCreateMutationOptions = Apollo.BaseMutationOptions<QrOrderCreateMutation, QrOrderCreateMutationVariables>;
export const UpdateQrOrderUpdateDocument = gql`
    mutation UpdateQROrderUpdate($id: ID!, $input: UpdateQROrder!) {
  qrOrderUpdate(id: $id, input: $input) {
    ...QROrderFragment
  }
}
    ${QrOrderFragmentFragmentDoc}`;
export type UpdateQrOrderUpdateMutationFn = Apollo.MutationFunction<UpdateQrOrderUpdateMutation, UpdateQrOrderUpdateMutationVariables>;

/**
 * __useUpdateQrOrderUpdateMutation__
 *
 * To run a mutation, you first call `useUpdateQrOrderUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQrOrderUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQrOrderUpdateMutation, { data, loading, error }] = useUpdateQrOrderUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateQrOrderUpdateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQrOrderUpdateMutation, UpdateQrOrderUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQrOrderUpdateMutation, UpdateQrOrderUpdateMutationVariables>(UpdateQrOrderUpdateDocument, options);
      }
export type UpdateQrOrderUpdateMutationHookResult = ReturnType<typeof useUpdateQrOrderUpdateMutation>;
export type UpdateQrOrderUpdateMutationResult = Apollo.MutationResult<UpdateQrOrderUpdateMutation>;
export type UpdateQrOrderUpdateMutationOptions = Apollo.BaseMutationOptions<UpdateQrOrderUpdateMutation, UpdateQrOrderUpdateMutationVariables>;
export const QrOrderFinalizeDocument = gql`
    mutation QROrderFinalize($id: ID!) {
  qrOrderFinalize(id: $id) {
    ...QROrderFragment
  }
}
    ${QrOrderFragmentFragmentDoc}`;
export type QrOrderFinalizeMutationFn = Apollo.MutationFunction<QrOrderFinalizeMutation, QrOrderFinalizeMutationVariables>;

/**
 * __useQrOrderFinalizeMutation__
 *
 * To run a mutation, you first call `useQrOrderFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQrOrderFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [qrOrderFinalizeMutation, { data, loading, error }] = useQrOrderFinalizeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQrOrderFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<QrOrderFinalizeMutation, QrOrderFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<QrOrderFinalizeMutation, QrOrderFinalizeMutationVariables>(QrOrderFinalizeDocument, options);
      }
export type QrOrderFinalizeMutationHookResult = ReturnType<typeof useQrOrderFinalizeMutation>;
export type QrOrderFinalizeMutationResult = Apollo.MutationResult<QrOrderFinalizeMutation>;
export type QrOrderFinalizeMutationOptions = Apollo.BaseMutationOptions<QrOrderFinalizeMutation, QrOrderFinalizeMutationVariables>;
export const QrOrderArchiveDocument = gql`
    mutation QROrderArchive($id: ID!) {
  qrOrderArchive(id: $id) {
    ...QROrderFragment
  }
}
    ${QrOrderFragmentFragmentDoc}`;
export type QrOrderArchiveMutationFn = Apollo.MutationFunction<QrOrderArchiveMutation, QrOrderArchiveMutationVariables>;

/**
 * __useQrOrderArchiveMutation__
 *
 * To run a mutation, you first call `useQrOrderArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQrOrderArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [qrOrderArchiveMutation, { data, loading, error }] = useQrOrderArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQrOrderArchiveMutation(baseOptions?: Apollo.MutationHookOptions<QrOrderArchiveMutation, QrOrderArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<QrOrderArchiveMutation, QrOrderArchiveMutationVariables>(QrOrderArchiveDocument, options);
      }
export type QrOrderArchiveMutationHookResult = ReturnType<typeof useQrOrderArchiveMutation>;
export type QrOrderArchiveMutationResult = Apollo.MutationResult<QrOrderArchiveMutation>;
export type QrOrderArchiveMutationOptions = Apollo.BaseMutationOptions<QrOrderArchiveMutation, QrOrderArchiveMutationVariables>;
export const QrOrderUnarchiveDocument = gql`
    mutation QROrderUnarchive($id: ID!) {
  qrOrderUnarchive(id: $id) {
    ...QROrderFragment
  }
}
    ${QrOrderFragmentFragmentDoc}`;
export type QrOrderUnarchiveMutationFn = Apollo.MutationFunction<QrOrderUnarchiveMutation, QrOrderUnarchiveMutationVariables>;

/**
 * __useQrOrderUnarchiveMutation__
 *
 * To run a mutation, you first call `useQrOrderUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQrOrderUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [qrOrderUnarchiveMutation, { data, loading, error }] = useQrOrderUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQrOrderUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<QrOrderUnarchiveMutation, QrOrderUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<QrOrderUnarchiveMutation, QrOrderUnarchiveMutationVariables>(QrOrderUnarchiveDocument, options);
      }
export type QrOrderUnarchiveMutationHookResult = ReturnType<typeof useQrOrderUnarchiveMutation>;
export type QrOrderUnarchiveMutationResult = Apollo.MutationResult<QrOrderUnarchiveMutation>;
export type QrOrderUnarchiveMutationOptions = Apollo.BaseMutationOptions<QrOrderUnarchiveMutation, QrOrderUnarchiveMutationVariables>;
export const SkusDocument = gql`
    query Skus($searchFilter: SearchFilter!) {
  skus(search: $searchFilter) {
    skus {
      ...SkuFragment
    }
    total
  }
}
    ${SkuFragmentFragmentDoc}`;

/**
 * __useSkusQuery__
 *
 * To run a query within a React component, call `useSkusQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkusQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function useSkusQuery(baseOptions: Apollo.QueryHookOptions<SkusQuery, SkusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkusQuery, SkusQueryVariables>(SkusDocument, options);
      }
export function useSkusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkusQuery, SkusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkusQuery, SkusQueryVariables>(SkusDocument, options);
        }
export type SkusQueryHookResult = ReturnType<typeof useSkusQuery>;
export type SkusLazyQueryHookResult = ReturnType<typeof useSkusLazyQuery>;
export type SkusQueryResult = Apollo.QueryResult<SkusQuery, SkusQueryVariables>;
export const SkuDocument = gql`
    query Sku($id: ID, $uid: UUID, $code: String) {
  sku(id: $id, uid: $uid, code: $code) {
    ...SkuFragment
  }
}
    ${SkuFragmentFragmentDoc}`;

/**
 * __useSkuQuery__
 *
 * To run a query within a React component, call `useSkuQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkuQuery({
 *   variables: {
 *      id: // value for 'id'
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useSkuQuery(baseOptions?: Apollo.QueryHookOptions<SkuQuery, SkuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkuQuery, SkuQueryVariables>(SkuDocument, options);
      }
export function useSkuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkuQuery, SkuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkuQuery, SkuQueryVariables>(SkuDocument, options);
        }
export type SkuQueryHookResult = ReturnType<typeof useSkuQuery>;
export type SkuLazyQueryHookResult = ReturnType<typeof useSkuLazyQuery>;
export type SkuQueryResult = Apollo.QueryResult<SkuQuery, SkuQueryVariables>;
export const SkuCreateDocument = gql`
    mutation SkuCreate($input: UpdateSku!) {
  skuCreate(input: $input) {
    ...SkuFragment
  }
}
    ${SkuFragmentFragmentDoc}`;
export type SkuCreateMutationFn = Apollo.MutationFunction<SkuCreateMutation, SkuCreateMutationVariables>;

/**
 * __useSkuCreateMutation__
 *
 * To run a mutation, you first call `useSkuCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkuCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skuCreateMutation, { data, loading, error }] = useSkuCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSkuCreateMutation(baseOptions?: Apollo.MutationHookOptions<SkuCreateMutation, SkuCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkuCreateMutation, SkuCreateMutationVariables>(SkuCreateDocument, options);
      }
export type SkuCreateMutationHookResult = ReturnType<typeof useSkuCreateMutation>;
export type SkuCreateMutationResult = Apollo.MutationResult<SkuCreateMutation>;
export type SkuCreateMutationOptions = Apollo.BaseMutationOptions<SkuCreateMutation, SkuCreateMutationVariables>;
export const SkuUpdateDocument = gql`
    mutation SkuUpdate($id: ID!, $input: UpdateSku!) {
  skuUpdate(id: $id, input: $input) {
    ...SkuFragment
  }
}
    ${SkuFragmentFragmentDoc}`;
export type SkuUpdateMutationFn = Apollo.MutationFunction<SkuUpdateMutation, SkuUpdateMutationVariables>;

/**
 * __useSkuUpdateMutation__
 *
 * To run a mutation, you first call `useSkuUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkuUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skuUpdateMutation, { data, loading, error }] = useSkuUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSkuUpdateMutation(baseOptions?: Apollo.MutationHookOptions<SkuUpdateMutation, SkuUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkuUpdateMutation, SkuUpdateMutationVariables>(SkuUpdateDocument, options);
      }
export type SkuUpdateMutationHookResult = ReturnType<typeof useSkuUpdateMutation>;
export type SkuUpdateMutationResult = Apollo.MutationResult<SkuUpdateMutation>;
export type SkuUpdateMutationOptions = Apollo.BaseMutationOptions<SkuUpdateMutation, SkuUpdateMutationVariables>;
export const SkuArchiveDocument = gql`
    mutation SkuArchive($id: ID!) {
  skuArchive(id: $id) {
    ...SkuFragment
  }
}
    ${SkuFragmentFragmentDoc}`;
export type SkuArchiveMutationFn = Apollo.MutationFunction<SkuArchiveMutation, SkuArchiveMutationVariables>;

/**
 * __useSkuArchiveMutation__
 *
 * To run a mutation, you first call `useSkuArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkuArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skuArchiveMutation, { data, loading, error }] = useSkuArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSkuArchiveMutation(baseOptions?: Apollo.MutationHookOptions<SkuArchiveMutation, SkuArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkuArchiveMutation, SkuArchiveMutationVariables>(SkuArchiveDocument, options);
      }
export type SkuArchiveMutationHookResult = ReturnType<typeof useSkuArchiveMutation>;
export type SkuArchiveMutationResult = Apollo.MutationResult<SkuArchiveMutation>;
export type SkuArchiveMutationOptions = Apollo.BaseMutationOptions<SkuArchiveMutation, SkuArchiveMutationVariables>;
export const SkuUnarchiveDocument = gql`
    mutation SkuUnarchive($id: ID!) {
  skuUnarchive(id: $id) {
    ...SkuFragment
  }
}
    ${SkuFragmentFragmentDoc}`;
export type SkuUnarchiveMutationFn = Apollo.MutationFunction<SkuUnarchiveMutation, SkuUnarchiveMutationVariables>;

/**
 * __useSkuUnarchiveMutation__
 *
 * To run a mutation, you first call `useSkuUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkuUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skuUnarchiveMutation, { data, loading, error }] = useSkuUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSkuUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<SkuUnarchiveMutation, SkuUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkuUnarchiveMutation, SkuUnarchiveMutationVariables>(SkuUnarchiveDocument, options);
      }
export type SkuUnarchiveMutationHookResult = ReturnType<typeof useSkuUnarchiveMutation>;
export type SkuUnarchiveMutationResult = Apollo.MutationResult<SkuUnarchiveMutation>;
export type SkuUnarchiveMutationOptions = Apollo.BaseMutationOptions<SkuUnarchiveMutation, SkuUnarchiveMutationVariables>;
export const NexportOrganizationsDocument = gql`
    query NexportOrganizations($searchFilter: SearchFilter!, $sector: String) {
  nexportOrganizations(search: $searchFilter, sector: $sector) {
    organizations {
      ...OrganizationFragment
    }
    total
  }
}
    ${OrganizationFragmentFragmentDoc}`;

/**
 * __useNexportOrganizationsQuery__
 *
 * To run a query within a React component, call `useNexportOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNexportOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNexportOrganizationsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      sector: // value for 'sector'
 *   },
 * });
 */
export function useNexportOrganizationsQuery(baseOptions: Apollo.QueryHookOptions<NexportOrganizationsQuery, NexportOrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NexportOrganizationsQuery, NexportOrganizationsQueryVariables>(NexportOrganizationsDocument, options);
      }
export function useNexportOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NexportOrganizationsQuery, NexportOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NexportOrganizationsQuery, NexportOrganizationsQueryVariables>(NexportOrganizationsDocument, options);
        }
export type NexportOrganizationsQueryHookResult = ReturnType<typeof useNexportOrganizationsQuery>;
export type NexportOrganizationsLazyQueryHookResult = ReturnType<typeof useNexportOrganizationsLazyQuery>;
export type NexportOrganizationsQueryResult = Apollo.QueryResult<NexportOrganizationsQuery, NexportOrganizationsQueryVariables>;
export const NexportSkuCataloguesDocument = gql`
    query NexportSkuCatalogues($searchFilter: SearchFilter!) {
  nexportSkuCatalogues(search: $searchFilter) {
    skuCatalogues {
      ...SkuCatalogueFragment
    }
    total
  }
}
    ${SkuCatalogueFragmentFragmentDoc}`;

/**
 * __useNexportSkuCataloguesQuery__
 *
 * To run a query within a React component, call `useNexportSkuCataloguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNexportSkuCataloguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNexportSkuCataloguesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function useNexportSkuCataloguesQuery(baseOptions: Apollo.QueryHookOptions<NexportSkuCataloguesQuery, NexportSkuCataloguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NexportSkuCataloguesQuery, NexportSkuCataloguesQueryVariables>(NexportSkuCataloguesDocument, options);
      }
export function useNexportSkuCataloguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NexportSkuCataloguesQuery, NexportSkuCataloguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NexportSkuCataloguesQuery, NexportSkuCataloguesQueryVariables>(NexportSkuCataloguesDocument, options);
        }
export type NexportSkuCataloguesQueryHookResult = ReturnType<typeof useNexportSkuCataloguesQuery>;
export type NexportSkuCataloguesLazyQueryHookResult = ReturnType<typeof useNexportSkuCataloguesLazyQuery>;
export type NexportSkuCataloguesQueryResult = Apollo.QueryResult<NexportSkuCataloguesQuery, NexportSkuCataloguesQueryVariables>;
export const NexportBatchCataloguesDocument = gql`
    query NexportBatchCatalogues($searchFilter: SearchFilter!, $skuUID: UUID) {
  nexportBatchCatalogues(search: $searchFilter, skuUID: $skuUID) {
    batchCatalogues {
      ...BatchCatalogueFragment
    }
    total
  }
}
    ${BatchCatalogueFragmentFragmentDoc}`;

/**
 * __useNexportBatchCataloguesQuery__
 *
 * To run a query within a React component, call `useNexportBatchCataloguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNexportBatchCataloguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNexportBatchCataloguesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      skuUID: // value for 'skuUID'
 *   },
 * });
 */
export function useNexportBatchCataloguesQuery(baseOptions: Apollo.QueryHookOptions<NexportBatchCataloguesQuery, NexportBatchCataloguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NexportBatchCataloguesQuery, NexportBatchCataloguesQueryVariables>(NexportBatchCataloguesDocument, options);
      }
export function useNexportBatchCataloguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NexportBatchCataloguesQuery, NexportBatchCataloguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NexportBatchCataloguesQuery, NexportBatchCataloguesQueryVariables>(NexportBatchCataloguesDocument, options);
        }
export type NexportBatchCataloguesQueryHookResult = ReturnType<typeof useNexportBatchCataloguesQuery>;
export type NexportBatchCataloguesLazyQueryHookResult = ReturnType<typeof useNexportBatchCataloguesLazyQuery>;
export type NexportBatchCataloguesQueryResult = Apollo.QueryResult<NexportBatchCataloguesQuery, NexportBatchCataloguesQueryVariables>;
export const PurchaseOrdersDocument = gql`
    query PurchaseOrders($searchFilter: SearchFilter!, $view: ViewOption) {
  purchaseOrders(search: $searchFilter, view: $view) {
    purchaseOrders {
      ...PurchaseOrderListFragment
    }
    total
  }
}
    ${PurchaseOrderListFragmentFragmentDoc}`;

/**
 * __usePurchaseOrdersQuery__
 *
 * To run a query within a React component, call `usePurchaseOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePurchaseOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePurchaseOrdersQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      view: // value for 'view'
 *   },
 * });
 */
export function usePurchaseOrdersQuery(baseOptions: Apollo.QueryHookOptions<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>(PurchaseOrdersDocument, options);
      }
export function usePurchaseOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>(PurchaseOrdersDocument, options);
        }
export type PurchaseOrdersQueryHookResult = ReturnType<typeof usePurchaseOrdersQuery>;
export type PurchaseOrdersLazyQueryHookResult = ReturnType<typeof usePurchaseOrdersLazyQuery>;
export type PurchaseOrdersQueryResult = Apollo.QueryResult<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>;
export const PurchaseOrderDocument = gql`
    query PurchaseOrder($id: ID, $uid: UUID, $code: String) {
  purchaseOrder(id: $id, uid: $uid, code: $code) {
    ...PurchaseOrderFragment
  }
}
    ${PurchaseOrderFragmentFragmentDoc}`;

/**
 * __usePurchaseOrderQuery__
 *
 * To run a query within a React component, call `usePurchaseOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePurchaseOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePurchaseOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function usePurchaseOrderQuery(baseOptions?: Apollo.QueryHookOptions<PurchaseOrderQuery, PurchaseOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PurchaseOrderQuery, PurchaseOrderQueryVariables>(PurchaseOrderDocument, options);
      }
export function usePurchaseOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PurchaseOrderQuery, PurchaseOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PurchaseOrderQuery, PurchaseOrderQueryVariables>(PurchaseOrderDocument, options);
        }
export type PurchaseOrderQueryHookResult = ReturnType<typeof usePurchaseOrderQuery>;
export type PurchaseOrderLazyQueryHookResult = ReturnType<typeof usePurchaseOrderLazyQuery>;
export type PurchaseOrderQueryResult = Apollo.QueryResult<PurchaseOrderQuery, PurchaseOrderQueryVariables>;
export const PurchaseOrderCreateDocument = gql`
    mutation PurchaseOrderCreate($input: UpdatePurchaseOrder!) {
  purchaseOrderCreate(input: $input) {
    ...PurchaseOrderFragment
  }
}
    ${PurchaseOrderFragmentFragmentDoc}`;
export type PurchaseOrderCreateMutationFn = Apollo.MutationFunction<PurchaseOrderCreateMutation, PurchaseOrderCreateMutationVariables>;

/**
 * __usePurchaseOrderCreateMutation__
 *
 * To run a mutation, you first call `usePurchaseOrderCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePurchaseOrderCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [purchaseOrderCreateMutation, { data, loading, error }] = usePurchaseOrderCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePurchaseOrderCreateMutation(baseOptions?: Apollo.MutationHookOptions<PurchaseOrderCreateMutation, PurchaseOrderCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PurchaseOrderCreateMutation, PurchaseOrderCreateMutationVariables>(PurchaseOrderCreateDocument, options);
      }
export type PurchaseOrderCreateMutationHookResult = ReturnType<typeof usePurchaseOrderCreateMutation>;
export type PurchaseOrderCreateMutationResult = Apollo.MutationResult<PurchaseOrderCreateMutation>;
export type PurchaseOrderCreateMutationOptions = Apollo.BaseMutationOptions<PurchaseOrderCreateMutation, PurchaseOrderCreateMutationVariables>;
export const UpdatePurchaseOrderUpdateDocument = gql`
    mutation UpdatePurchaseOrderUpdate($uid: UUID!, $input: UpdatePurchaseOrder!) {
  purchaseOrderUpdate(uid: $uid, input: $input) {
    ...PurchaseOrderFragment
  }
}
    ${PurchaseOrderFragmentFragmentDoc}`;
export type UpdatePurchaseOrderUpdateMutationFn = Apollo.MutationFunction<UpdatePurchaseOrderUpdateMutation, UpdatePurchaseOrderUpdateMutationVariables>;

/**
 * __useUpdatePurchaseOrderUpdateMutation__
 *
 * To run a mutation, you first call `useUpdatePurchaseOrderUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePurchaseOrderUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePurchaseOrderUpdateMutation, { data, loading, error }] = useUpdatePurchaseOrderUpdateMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePurchaseOrderUpdateMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePurchaseOrderUpdateMutation, UpdatePurchaseOrderUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePurchaseOrderUpdateMutation, UpdatePurchaseOrderUpdateMutationVariables>(UpdatePurchaseOrderUpdateDocument, options);
      }
export type UpdatePurchaseOrderUpdateMutationHookResult = ReturnType<typeof useUpdatePurchaseOrderUpdateMutation>;
export type UpdatePurchaseOrderUpdateMutationResult = Apollo.MutationResult<UpdatePurchaseOrderUpdateMutation>;
export type UpdatePurchaseOrderUpdateMutationOptions = Apollo.BaseMutationOptions<UpdatePurchaseOrderUpdateMutation, UpdatePurchaseOrderUpdateMutationVariables>;
export const PurchaseOrderFinalizeDocument = gql`
    mutation PurchaseOrderFinalize($uid: UUID!) {
  purchaseOrderFinalize(uid: $uid) {
    ...PurchaseOrderFragment
  }
}
    ${PurchaseOrderFragmentFragmentDoc}`;
export type PurchaseOrderFinalizeMutationFn = Apollo.MutationFunction<PurchaseOrderFinalizeMutation, PurchaseOrderFinalizeMutationVariables>;

/**
 * __usePurchaseOrderFinalizeMutation__
 *
 * To run a mutation, you first call `usePurchaseOrderFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePurchaseOrderFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [purchaseOrderFinalizeMutation, { data, loading, error }] = usePurchaseOrderFinalizeMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function usePurchaseOrderFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<PurchaseOrderFinalizeMutation, PurchaseOrderFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PurchaseOrderFinalizeMutation, PurchaseOrderFinalizeMutationVariables>(PurchaseOrderFinalizeDocument, options);
      }
export type PurchaseOrderFinalizeMutationHookResult = ReturnType<typeof usePurchaseOrderFinalizeMutation>;
export type PurchaseOrderFinalizeMutationResult = Apollo.MutationResult<PurchaseOrderFinalizeMutation>;
export type PurchaseOrderFinalizeMutationOptions = Apollo.BaseMutationOptions<PurchaseOrderFinalizeMutation, PurchaseOrderFinalizeMutationVariables>;
export const PurchaseOrderArchiveDocument = gql`
    mutation PurchaseOrderArchive($uid: UUID!) {
  purchaseOrderArchive(uid: $uid) {
    ...PurchaseOrderFragment
  }
}
    ${PurchaseOrderFragmentFragmentDoc}`;
export type PurchaseOrderArchiveMutationFn = Apollo.MutationFunction<PurchaseOrderArchiveMutation, PurchaseOrderArchiveMutationVariables>;

/**
 * __usePurchaseOrderArchiveMutation__
 *
 * To run a mutation, you first call `usePurchaseOrderArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePurchaseOrderArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [purchaseOrderArchiveMutation, { data, loading, error }] = usePurchaseOrderArchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function usePurchaseOrderArchiveMutation(baseOptions?: Apollo.MutationHookOptions<PurchaseOrderArchiveMutation, PurchaseOrderArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PurchaseOrderArchiveMutation, PurchaseOrderArchiveMutationVariables>(PurchaseOrderArchiveDocument, options);
      }
export type PurchaseOrderArchiveMutationHookResult = ReturnType<typeof usePurchaseOrderArchiveMutation>;
export type PurchaseOrderArchiveMutationResult = Apollo.MutationResult<PurchaseOrderArchiveMutation>;
export type PurchaseOrderArchiveMutationOptions = Apollo.BaseMutationOptions<PurchaseOrderArchiveMutation, PurchaseOrderArchiveMutationVariables>;
export const PurchaseOrderUnarchiveDocument = gql`
    mutation PurchaseOrderUnarchive($uid: UUID!) {
  purchaseOrderUnarchive(uid: $uid) {
    ...PurchaseOrderFragment
  }
}
    ${PurchaseOrderFragmentFragmentDoc}`;
export type PurchaseOrderUnarchiveMutationFn = Apollo.MutationFunction<PurchaseOrderUnarchiveMutation, PurchaseOrderUnarchiveMutationVariables>;

/**
 * __usePurchaseOrderUnarchiveMutation__
 *
 * To run a mutation, you first call `usePurchaseOrderUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePurchaseOrderUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [purchaseOrderUnarchiveMutation, { data, loading, error }] = usePurchaseOrderUnarchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function usePurchaseOrderUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<PurchaseOrderUnarchiveMutation, PurchaseOrderUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PurchaseOrderUnarchiveMutation, PurchaseOrderUnarchiveMutationVariables>(PurchaseOrderUnarchiveDocument, options);
      }
export type PurchaseOrderUnarchiveMutationHookResult = ReturnType<typeof usePurchaseOrderUnarchiveMutation>;
export type PurchaseOrderUnarchiveMutationResult = Apollo.MutationResult<PurchaseOrderUnarchiveMutation>;
export type PurchaseOrderUnarchiveMutationOptions = Apollo.BaseMutationOptions<PurchaseOrderUnarchiveMutation, PurchaseOrderUnarchiveMutationVariables>;
export const TransactionsDocument = gql`
    query Transactions($searchFilter: SearchFilter!, $objectUID: UUID) {
  transactions(search: $searchFilter, objectUID: $objectUID) {
    transactions {
      ...TransactionFragment
    }
    total
  }
}
    ${TransactionFragmentFragmentDoc}`;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      objectUID: // value for 'objectUID'
 *   },
 * });
 */
export function useTransactionsQuery(baseOptions: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
      }
export function useTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export const CellsDocument = gql`
    query Cells($searchFilter: SearchFilter!, $rackID: ID) {
  cells(search: $searchFilter, rackID: $rackID) {
    cells {
      ...CellFragment
    }
    total
  }
}
    ${CellFragmentFragmentDoc}`;

/**
 * __useCellsQuery__
 *
 * To run a query within a React component, call `useCellsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCellsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCellsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      rackID: // value for 'rackID'
 *   },
 * });
 */
export function useCellsQuery(baseOptions: Apollo.QueryHookOptions<CellsQuery, CellsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CellsQuery, CellsQueryVariables>(CellsDocument, options);
      }
export function useCellsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CellsQuery, CellsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CellsQuery, CellsQueryVariables>(CellsDocument, options);
        }
export type CellsQueryHookResult = ReturnType<typeof useCellsQuery>;
export type CellsLazyQueryHookResult = ReturnType<typeof useCellsLazyQuery>;
export type CellsQueryResult = Apollo.QueryResult<CellsQuery, CellsQueryVariables>;
export const CellDocument = gql`
    query Cell($id: ID, $code: String) {
  cell(id: $id, code: $code) {
    ...CellFragment
  }
}
    ${CellFragmentFragmentDoc}`;

/**
 * __useCellQuery__
 *
 * To run a query within a React component, call `useCellQuery` and pass it any options that fit your needs.
 * When your component renders, `useCellQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCellQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCellQuery(baseOptions?: Apollo.QueryHookOptions<CellQuery, CellQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CellQuery, CellQueryVariables>(CellDocument, options);
      }
export function useCellLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CellQuery, CellQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CellQuery, CellQueryVariables>(CellDocument, options);
        }
export type CellQueryHookResult = ReturnType<typeof useCellQuery>;
export type CellLazyQueryHookResult = ReturnType<typeof useCellLazyQuery>;
export type CellQueryResult = Apollo.QueryResult<CellQuery, CellQueryVariables>;
export const CellCreateDocument = gql`
    mutation CellCreate($input: UpdateCell!) {
  cellCreate(input: $input) {
    ...CellFragment
  }
}
    ${CellFragmentFragmentDoc}`;
export type CellCreateMutationFn = Apollo.MutationFunction<CellCreateMutation, CellCreateMutationVariables>;

/**
 * __useCellCreateMutation__
 *
 * To run a mutation, you first call `useCellCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCellCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cellCreateMutation, { data, loading, error }] = useCellCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCellCreateMutation(baseOptions?: Apollo.MutationHookOptions<CellCreateMutation, CellCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CellCreateMutation, CellCreateMutationVariables>(CellCreateDocument, options);
      }
export type CellCreateMutationHookResult = ReturnType<typeof useCellCreateMutation>;
export type CellCreateMutationResult = Apollo.MutationResult<CellCreateMutation>;
export type CellCreateMutationOptions = Apollo.BaseMutationOptions<CellCreateMutation, CellCreateMutationVariables>;
export const CellUpdateDocument = gql`
    mutation CellUpdate($id: ID!, $input: UpdateCell!) {
  cellUpdate(id: $id, input: $input) {
    ...CellFragment
  }
}
    ${CellFragmentFragmentDoc}`;
export type CellUpdateMutationFn = Apollo.MutationFunction<CellUpdateMutation, CellUpdateMutationVariables>;

/**
 * __useCellUpdateMutation__
 *
 * To run a mutation, you first call `useCellUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCellUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cellUpdateMutation, { data, loading, error }] = useCellUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCellUpdateMutation(baseOptions?: Apollo.MutationHookOptions<CellUpdateMutation, CellUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CellUpdateMutation, CellUpdateMutationVariables>(CellUpdateDocument, options);
      }
export type CellUpdateMutationHookResult = ReturnType<typeof useCellUpdateMutation>;
export type CellUpdateMutationResult = Apollo.MutationResult<CellUpdateMutation>;
export type CellUpdateMutationOptions = Apollo.BaseMutationOptions<CellUpdateMutation, CellUpdateMutationVariables>;
export const CellFinalizeDocument = gql`
    mutation CellFinalize($id: ID!) {
  cellFinalize(id: $id) {
    ...CellFragment
  }
}
    ${CellFragmentFragmentDoc}`;
export type CellFinalizeMutationFn = Apollo.MutationFunction<CellFinalizeMutation, CellFinalizeMutationVariables>;

/**
 * __useCellFinalizeMutation__
 *
 * To run a mutation, you first call `useCellFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCellFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cellFinalizeMutation, { data, loading, error }] = useCellFinalizeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCellFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<CellFinalizeMutation, CellFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CellFinalizeMutation, CellFinalizeMutationVariables>(CellFinalizeDocument, options);
      }
export type CellFinalizeMutationHookResult = ReturnType<typeof useCellFinalizeMutation>;
export type CellFinalizeMutationResult = Apollo.MutationResult<CellFinalizeMutation>;
export type CellFinalizeMutationOptions = Apollo.BaseMutationOptions<CellFinalizeMutation, CellFinalizeMutationVariables>;
export const CellArchiveDocument = gql`
    mutation CellArchive($id: ID!) {
  cellArchive(id: $id) {
    ...CellFragment
  }
}
    ${CellFragmentFragmentDoc}`;
export type CellArchiveMutationFn = Apollo.MutationFunction<CellArchiveMutation, CellArchiveMutationVariables>;

/**
 * __useCellArchiveMutation__
 *
 * To run a mutation, you first call `useCellArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCellArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cellArchiveMutation, { data, loading, error }] = useCellArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCellArchiveMutation(baseOptions?: Apollo.MutationHookOptions<CellArchiveMutation, CellArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CellArchiveMutation, CellArchiveMutationVariables>(CellArchiveDocument, options);
      }
export type CellArchiveMutationHookResult = ReturnType<typeof useCellArchiveMutation>;
export type CellArchiveMutationResult = Apollo.MutationResult<CellArchiveMutation>;
export type CellArchiveMutationOptions = Apollo.BaseMutationOptions<CellArchiveMutation, CellArchiveMutationVariables>;
export const CellUnarchiveDocument = gql`
    mutation CellUnarchive($id: ID!) {
  cellUnarchive(id: $id) {
    ...CellFragment
  }
}
    ${CellFragmentFragmentDoc}`;
export type CellUnarchiveMutationFn = Apollo.MutationFunction<CellUnarchiveMutation, CellUnarchiveMutationVariables>;

/**
 * __useCellUnarchiveMutation__
 *
 * To run a mutation, you first call `useCellUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCellUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cellUnarchiveMutation, { data, loading, error }] = useCellUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCellUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<CellUnarchiveMutation, CellUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CellUnarchiveMutation, CellUnarchiveMutationVariables>(CellUnarchiveDocument, options);
      }
export type CellUnarchiveMutationHookResult = ReturnType<typeof useCellUnarchiveMutation>;
export type CellUnarchiveMutationResult = Apollo.MutationResult<CellUnarchiveMutation>;
export type CellUnarchiveMutationOptions = Apollo.BaseMutationOptions<CellUnarchiveMutation, CellUnarchiveMutationVariables>;
export const RacksDocument = gql`
    query Racks($searchFilter: SearchFilter!, $typeID: ID) {
  racks(search: $searchFilter, typeID: $typeID) {
    racks {
      ...RackFragment
    }
    total
  }
}
    ${RackFragmentFragmentDoc}`;

/**
 * __useRacksQuery__
 *
 * To run a query within a React component, call `useRacksQuery` and pass it any options that fit your needs.
 * When your component renders, `useRacksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRacksQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      typeID: // value for 'typeID'
 *   },
 * });
 */
export function useRacksQuery(baseOptions: Apollo.QueryHookOptions<RacksQuery, RacksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RacksQuery, RacksQueryVariables>(RacksDocument, options);
      }
export function useRacksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RacksQuery, RacksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RacksQuery, RacksQueryVariables>(RacksDocument, options);
        }
export type RacksQueryHookResult = ReturnType<typeof useRacksQuery>;
export type RacksLazyQueryHookResult = ReturnType<typeof useRacksLazyQuery>;
export type RacksQueryResult = Apollo.QueryResult<RacksQuery, RacksQueryVariables>;
export const RackDocument = gql`
    query Rack($id: ID, $code: String) {
  rack(id: $id, code: $code) {
    ...RackFragment
  }
}
    ${RackFragmentFragmentDoc}`;

/**
 * __useRackQuery__
 *
 * To run a query within a React component, call `useRackQuery` and pass it any options that fit your needs.
 * When your component renders, `useRackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRackQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useRackQuery(baseOptions?: Apollo.QueryHookOptions<RackQuery, RackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RackQuery, RackQueryVariables>(RackDocument, options);
      }
export function useRackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RackQuery, RackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RackQuery, RackQueryVariables>(RackDocument, options);
        }
export type RackQueryHookResult = ReturnType<typeof useRackQuery>;
export type RackLazyQueryHookResult = ReturnType<typeof useRackLazyQuery>;
export type RackQueryResult = Apollo.QueryResult<RackQuery, RackQueryVariables>;
export const RackCreateDocument = gql`
    mutation RackCreate($input: UpdateRack!) {
  rackCreate(input: $input) {
    ...RackFragment
  }
}
    ${RackFragmentFragmentDoc}`;
export type RackCreateMutationFn = Apollo.MutationFunction<RackCreateMutation, RackCreateMutationVariables>;

/**
 * __useRackCreateMutation__
 *
 * To run a mutation, you first call `useRackCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRackCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rackCreateMutation, { data, loading, error }] = useRackCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRackCreateMutation(baseOptions?: Apollo.MutationHookOptions<RackCreateMutation, RackCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RackCreateMutation, RackCreateMutationVariables>(RackCreateDocument, options);
      }
export type RackCreateMutationHookResult = ReturnType<typeof useRackCreateMutation>;
export type RackCreateMutationResult = Apollo.MutationResult<RackCreateMutation>;
export type RackCreateMutationOptions = Apollo.BaseMutationOptions<RackCreateMutation, RackCreateMutationVariables>;
export const RackUpdateDocument = gql`
    mutation RackUpdate($id: ID!, $input: UpdateRack!) {
  rackUpdate(id: $id, input: $input) {
    ...RackFragment
  }
}
    ${RackFragmentFragmentDoc}`;
export type RackUpdateMutationFn = Apollo.MutationFunction<RackUpdateMutation, RackUpdateMutationVariables>;

/**
 * __useRackUpdateMutation__
 *
 * To run a mutation, you first call `useRackUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRackUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rackUpdateMutation, { data, loading, error }] = useRackUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRackUpdateMutation(baseOptions?: Apollo.MutationHookOptions<RackUpdateMutation, RackUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RackUpdateMutation, RackUpdateMutationVariables>(RackUpdateDocument, options);
      }
export type RackUpdateMutationHookResult = ReturnType<typeof useRackUpdateMutation>;
export type RackUpdateMutationResult = Apollo.MutationResult<RackUpdateMutation>;
export type RackUpdateMutationOptions = Apollo.BaseMutationOptions<RackUpdateMutation, RackUpdateMutationVariables>;
export const RackFinalizeDocument = gql`
    mutation RackFinalize($id: ID!) {
  rackFinalize(id: $id) {
    ...RackFragment
  }
}
    ${RackFragmentFragmentDoc}`;
export type RackFinalizeMutationFn = Apollo.MutationFunction<RackFinalizeMutation, RackFinalizeMutationVariables>;

/**
 * __useRackFinalizeMutation__
 *
 * To run a mutation, you first call `useRackFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRackFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rackFinalizeMutation, { data, loading, error }] = useRackFinalizeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRackFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<RackFinalizeMutation, RackFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RackFinalizeMutation, RackFinalizeMutationVariables>(RackFinalizeDocument, options);
      }
export type RackFinalizeMutationHookResult = ReturnType<typeof useRackFinalizeMutation>;
export type RackFinalizeMutationResult = Apollo.MutationResult<RackFinalizeMutation>;
export type RackFinalizeMutationOptions = Apollo.BaseMutationOptions<RackFinalizeMutation, RackFinalizeMutationVariables>;
export const RackArchiveDocument = gql`
    mutation RackArchive($id: ID!) {
  rackArchive(id: $id) {
    ...RackFragment
  }
}
    ${RackFragmentFragmentDoc}`;
export type RackArchiveMutationFn = Apollo.MutationFunction<RackArchiveMutation, RackArchiveMutationVariables>;

/**
 * __useRackArchiveMutation__
 *
 * To run a mutation, you first call `useRackArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRackArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rackArchiveMutation, { data, loading, error }] = useRackArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRackArchiveMutation(baseOptions?: Apollo.MutationHookOptions<RackArchiveMutation, RackArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RackArchiveMutation, RackArchiveMutationVariables>(RackArchiveDocument, options);
      }
export type RackArchiveMutationHookResult = ReturnType<typeof useRackArchiveMutation>;
export type RackArchiveMutationResult = Apollo.MutationResult<RackArchiveMutation>;
export type RackArchiveMutationOptions = Apollo.BaseMutationOptions<RackArchiveMutation, RackArchiveMutationVariables>;
export const RackUnarchiveDocument = gql`
    mutation RackUnarchive($id: ID!) {
  rackUnarchive(id: $id) {
    ...RackFragment
  }
}
    ${RackFragmentFragmentDoc}`;
export type RackUnarchiveMutationFn = Apollo.MutationFunction<RackUnarchiveMutation, RackUnarchiveMutationVariables>;

/**
 * __useRackUnarchiveMutation__
 *
 * To run a mutation, you first call `useRackUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRackUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rackUnarchiveMutation, { data, loading, error }] = useRackUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRackUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<RackUnarchiveMutation, RackUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RackUnarchiveMutation, RackUnarchiveMutationVariables>(RackUnarchiveDocument, options);
      }
export type RackUnarchiveMutationHookResult = ReturnType<typeof useRackUnarchiveMutation>;
export type RackUnarchiveMutationResult = Apollo.MutationResult<RackUnarchiveMutation>;
export type RackUnarchiveMutationOptions = Apollo.BaseMutationOptions<RackUnarchiveMutation, RackUnarchiveMutationVariables>;
export const RackTypesDocument = gql`
    query RackTypes($searchFilter: SearchFilter!) {
  rackTypes(search: $searchFilter) {
    rackTypes {
      ...RackTypeFragment
    }
    total
  }
}
    ${RackTypeFragmentFragmentDoc}`;

/**
 * __useRackTypesQuery__
 *
 * To run a query within a React component, call `useRackTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRackTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRackTypesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function useRackTypesQuery(baseOptions: Apollo.QueryHookOptions<RackTypesQuery, RackTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RackTypesQuery, RackTypesQueryVariables>(RackTypesDocument, options);
      }
export function useRackTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RackTypesQuery, RackTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RackTypesQuery, RackTypesQueryVariables>(RackTypesDocument, options);
        }
export type RackTypesQueryHookResult = ReturnType<typeof useRackTypesQuery>;
export type RackTypesLazyQueryHookResult = ReturnType<typeof useRackTypesLazyQuery>;
export type RackTypesQueryResult = Apollo.QueryResult<RackTypesQuery, RackTypesQueryVariables>;
export const RackTypeDocument = gql`
    query RackType($id: ID, $code: String) {
  rackType(id: $id, code: $code) {
    ...RackTypeFragment
  }
}
    ${RackTypeFragmentFragmentDoc}`;

/**
 * __useRackTypeQuery__
 *
 * To run a query within a React component, call `useRackTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRackTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRackTypeQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useRackTypeQuery(baseOptions?: Apollo.QueryHookOptions<RackTypeQuery, RackTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RackTypeQuery, RackTypeQueryVariables>(RackTypeDocument, options);
      }
export function useRackTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RackTypeQuery, RackTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RackTypeQuery, RackTypeQueryVariables>(RackTypeDocument, options);
        }
export type RackTypeQueryHookResult = ReturnType<typeof useRackTypeQuery>;
export type RackTypeLazyQueryHookResult = ReturnType<typeof useRackTypeLazyQuery>;
export type RackTypeQueryResult = Apollo.QueryResult<RackTypeQuery, RackTypeQueryVariables>;
export const RackTypeCreateDocument = gql`
    mutation RackTypeCreate($input: UpdateRackType!) {
  rackTypeCreate(input: $input) {
    ...RackTypeFragment
  }
}
    ${RackTypeFragmentFragmentDoc}`;
export type RackTypeCreateMutationFn = Apollo.MutationFunction<RackTypeCreateMutation, RackTypeCreateMutationVariables>;

/**
 * __useRackTypeCreateMutation__
 *
 * To run a mutation, you first call `useRackTypeCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRackTypeCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rackTypeCreateMutation, { data, loading, error }] = useRackTypeCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRackTypeCreateMutation(baseOptions?: Apollo.MutationHookOptions<RackTypeCreateMutation, RackTypeCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RackTypeCreateMutation, RackTypeCreateMutationVariables>(RackTypeCreateDocument, options);
      }
export type RackTypeCreateMutationHookResult = ReturnType<typeof useRackTypeCreateMutation>;
export type RackTypeCreateMutationResult = Apollo.MutationResult<RackTypeCreateMutation>;
export type RackTypeCreateMutationOptions = Apollo.BaseMutationOptions<RackTypeCreateMutation, RackTypeCreateMutationVariables>;
export const RackTypeUpdateDocument = gql`
    mutation RackTypeUpdate($id: ID!, $input: UpdateRackType!) {
  rackTypeUpdate(id: $id, input: $input) {
    ...RackTypeFragment
  }
}
    ${RackTypeFragmentFragmentDoc}`;
export type RackTypeUpdateMutationFn = Apollo.MutationFunction<RackTypeUpdateMutation, RackTypeUpdateMutationVariables>;

/**
 * __useRackTypeUpdateMutation__
 *
 * To run a mutation, you first call `useRackTypeUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRackTypeUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rackTypeUpdateMutation, { data, loading, error }] = useRackTypeUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRackTypeUpdateMutation(baseOptions?: Apollo.MutationHookOptions<RackTypeUpdateMutation, RackTypeUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RackTypeUpdateMutation, RackTypeUpdateMutationVariables>(RackTypeUpdateDocument, options);
      }
export type RackTypeUpdateMutationHookResult = ReturnType<typeof useRackTypeUpdateMutation>;
export type RackTypeUpdateMutationResult = Apollo.MutationResult<RackTypeUpdateMutation>;
export type RackTypeUpdateMutationOptions = Apollo.BaseMutationOptions<RackTypeUpdateMutation, RackTypeUpdateMutationVariables>;
export const RackTypeFinalizeDocument = gql`
    mutation RackTypeFinalize($id: ID!) {
  rackTypeFinalize(id: $id) {
    ...RackTypeFragment
  }
}
    ${RackTypeFragmentFragmentDoc}`;
export type RackTypeFinalizeMutationFn = Apollo.MutationFunction<RackTypeFinalizeMutation, RackTypeFinalizeMutationVariables>;

/**
 * __useRackTypeFinalizeMutation__
 *
 * To run a mutation, you first call `useRackTypeFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRackTypeFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rackTypeFinalizeMutation, { data, loading, error }] = useRackTypeFinalizeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRackTypeFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<RackTypeFinalizeMutation, RackTypeFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RackTypeFinalizeMutation, RackTypeFinalizeMutationVariables>(RackTypeFinalizeDocument, options);
      }
export type RackTypeFinalizeMutationHookResult = ReturnType<typeof useRackTypeFinalizeMutation>;
export type RackTypeFinalizeMutationResult = Apollo.MutationResult<RackTypeFinalizeMutation>;
export type RackTypeFinalizeMutationOptions = Apollo.BaseMutationOptions<RackTypeFinalizeMutation, RackTypeFinalizeMutationVariables>;
export const RackTypeArchiveDocument = gql`
    mutation RackTypeArchive($id: ID!) {
  rackTypeArchive(id: $id) {
    ...RackTypeFragment
  }
}
    ${RackTypeFragmentFragmentDoc}`;
export type RackTypeArchiveMutationFn = Apollo.MutationFunction<RackTypeArchiveMutation, RackTypeArchiveMutationVariables>;

/**
 * __useRackTypeArchiveMutation__
 *
 * To run a mutation, you first call `useRackTypeArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRackTypeArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rackTypeArchiveMutation, { data, loading, error }] = useRackTypeArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRackTypeArchiveMutation(baseOptions?: Apollo.MutationHookOptions<RackTypeArchiveMutation, RackTypeArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RackTypeArchiveMutation, RackTypeArchiveMutationVariables>(RackTypeArchiveDocument, options);
      }
export type RackTypeArchiveMutationHookResult = ReturnType<typeof useRackTypeArchiveMutation>;
export type RackTypeArchiveMutationResult = Apollo.MutationResult<RackTypeArchiveMutation>;
export type RackTypeArchiveMutationOptions = Apollo.BaseMutationOptions<RackTypeArchiveMutation, RackTypeArchiveMutationVariables>;
export const RackTypeUnarchiveDocument = gql`
    mutation RackTypeUnarchive($id: ID!) {
  rackTypeUnarchive(id: $id) {
    ...RackTypeFragment
  }
}
    ${RackTypeFragmentFragmentDoc}`;
export type RackTypeUnarchiveMutationFn = Apollo.MutationFunction<RackTypeUnarchiveMutation, RackTypeUnarchiveMutationVariables>;

/**
 * __useRackTypeUnarchiveMutation__
 *
 * To run a mutation, you first call `useRackTypeUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRackTypeUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rackTypeUnarchiveMutation, { data, loading, error }] = useRackTypeUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRackTypeUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<RackTypeUnarchiveMutation, RackTypeUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RackTypeUnarchiveMutation, RackTypeUnarchiveMutationVariables>(RackTypeUnarchiveDocument, options);
      }
export type RackTypeUnarchiveMutationHookResult = ReturnType<typeof useRackTypeUnarchiveMutation>;
export type RackTypeUnarchiveMutationResult = Apollo.MutationResult<RackTypeUnarchiveMutation>;
export type RackTypeUnarchiveMutationOptions = Apollo.BaseMutationOptions<RackTypeUnarchiveMutation, RackTypeUnarchiveMutationVariables>;
export const WarehousesDocument = gql`
    query Warehouses($searchFilter: SearchFilter!, $typeID: ID, $isThirdParty: Boolean) {
  warehouses(search: $searchFilter, typeID: $typeID, isThirdParty: $isThirdParty) {
    warehouses {
      ...WarehouseFragment
    }
    total
  }
}
    ${WarehouseFragmentFragmentDoc}`;

/**
 * __useWarehousesQuery__
 *
 * To run a query within a React component, call `useWarehousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehousesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      typeID: // value for 'typeID'
 *      isThirdParty: // value for 'isThirdParty'
 *   },
 * });
 */
export function useWarehousesQuery(baseOptions: Apollo.QueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
      }
export function useWarehousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
        }
export type WarehousesQueryHookResult = ReturnType<typeof useWarehousesQuery>;
export type WarehousesLazyQueryHookResult = ReturnType<typeof useWarehousesLazyQuery>;
export type WarehousesQueryResult = Apollo.QueryResult<WarehousesQuery, WarehousesQueryVariables>;
export const WarehouseDocument = gql`
    query Warehouse($uid: UUID, $code: String) {
  warehouse(uid: $uid, code: $code) {
    ...WarehouseFragment
  }
}
    ${WarehouseFragmentFragmentDoc}`;

/**
 * __useWarehouseQuery__
 *
 * To run a query within a React component, call `useWarehouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehouseQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useWarehouseQuery(baseOptions?: Apollo.QueryHookOptions<WarehouseQuery, WarehouseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehouseQuery, WarehouseQueryVariables>(WarehouseDocument, options);
      }
export function useWarehouseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehouseQuery, WarehouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehouseQuery, WarehouseQueryVariables>(WarehouseDocument, options);
        }
export type WarehouseQueryHookResult = ReturnType<typeof useWarehouseQuery>;
export type WarehouseLazyQueryHookResult = ReturnType<typeof useWarehouseLazyQuery>;
export type WarehouseQueryResult = Apollo.QueryResult<WarehouseQuery, WarehouseQueryVariables>;
export const WarehouseCreateDocument = gql`
    mutation WarehouseCreate($input: UpdateWarehouse!) {
  warehouseCreate(input: $input) {
    ...WarehouseFragment
  }
}
    ${WarehouseFragmentFragmentDoc}`;
export type WarehouseCreateMutationFn = Apollo.MutationFunction<WarehouseCreateMutation, WarehouseCreateMutationVariables>;

/**
 * __useWarehouseCreateMutation__
 *
 * To run a mutation, you first call `useWarehouseCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseCreateMutation, { data, loading, error }] = useWarehouseCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWarehouseCreateMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseCreateMutation, WarehouseCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseCreateMutation, WarehouseCreateMutationVariables>(WarehouseCreateDocument, options);
      }
export type WarehouseCreateMutationHookResult = ReturnType<typeof useWarehouseCreateMutation>;
export type WarehouseCreateMutationResult = Apollo.MutationResult<WarehouseCreateMutation>;
export type WarehouseCreateMutationOptions = Apollo.BaseMutationOptions<WarehouseCreateMutation, WarehouseCreateMutationVariables>;
export const WarehouseUpdateDocument = gql`
    mutation WarehouseUpdate($uid: UUID!, $input: UpdateWarehouse!) {
  warehouseUpdate(uid: $uid, input: $input) {
    ...WarehouseFragment
  }
}
    ${WarehouseFragmentFragmentDoc}`;
export type WarehouseUpdateMutationFn = Apollo.MutationFunction<WarehouseUpdateMutation, WarehouseUpdateMutationVariables>;

/**
 * __useWarehouseUpdateMutation__
 *
 * To run a mutation, you first call `useWarehouseUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseUpdateMutation, { data, loading, error }] = useWarehouseUpdateMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWarehouseUpdateMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseUpdateMutation, WarehouseUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseUpdateMutation, WarehouseUpdateMutationVariables>(WarehouseUpdateDocument, options);
      }
export type WarehouseUpdateMutationHookResult = ReturnType<typeof useWarehouseUpdateMutation>;
export type WarehouseUpdateMutationResult = Apollo.MutationResult<WarehouseUpdateMutation>;
export type WarehouseUpdateMutationOptions = Apollo.BaseMutationOptions<WarehouseUpdateMutation, WarehouseUpdateMutationVariables>;
export const WarehouseFinalizeDocument = gql`
    mutation WarehouseFinalize($uid: UUID!) {
  warehouseFinalize(uid: $uid) {
    ...WarehouseFragment
  }
}
    ${WarehouseFragmentFragmentDoc}`;
export type WarehouseFinalizeMutationFn = Apollo.MutationFunction<WarehouseFinalizeMutation, WarehouseFinalizeMutationVariables>;

/**
 * __useWarehouseFinalizeMutation__
 *
 * To run a mutation, you first call `useWarehouseFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseFinalizeMutation, { data, loading, error }] = useWarehouseFinalizeMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useWarehouseFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseFinalizeMutation, WarehouseFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseFinalizeMutation, WarehouseFinalizeMutationVariables>(WarehouseFinalizeDocument, options);
      }
export type WarehouseFinalizeMutationHookResult = ReturnType<typeof useWarehouseFinalizeMutation>;
export type WarehouseFinalizeMutationResult = Apollo.MutationResult<WarehouseFinalizeMutation>;
export type WarehouseFinalizeMutationOptions = Apollo.BaseMutationOptions<WarehouseFinalizeMutation, WarehouseFinalizeMutationVariables>;
export const WarehouseArchiveDocument = gql`
    mutation WarehouseArchive($uid: UUID!) {
  warehouseArchive(uid: $uid) {
    ...WarehouseFragment
  }
}
    ${WarehouseFragmentFragmentDoc}`;
export type WarehouseArchiveMutationFn = Apollo.MutationFunction<WarehouseArchiveMutation, WarehouseArchiveMutationVariables>;

/**
 * __useWarehouseArchiveMutation__
 *
 * To run a mutation, you first call `useWarehouseArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseArchiveMutation, { data, loading, error }] = useWarehouseArchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useWarehouseArchiveMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseArchiveMutation, WarehouseArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseArchiveMutation, WarehouseArchiveMutationVariables>(WarehouseArchiveDocument, options);
      }
export type WarehouseArchiveMutationHookResult = ReturnType<typeof useWarehouseArchiveMutation>;
export type WarehouseArchiveMutationResult = Apollo.MutationResult<WarehouseArchiveMutation>;
export type WarehouseArchiveMutationOptions = Apollo.BaseMutationOptions<WarehouseArchiveMutation, WarehouseArchiveMutationVariables>;
export const WarehouseUnarchiveDocument = gql`
    mutation WarehouseUnarchive($uid: UUID!) {
  warehouseUnarchive(uid: $uid) {
    ...WarehouseFragment
  }
}
    ${WarehouseFragmentFragmentDoc}`;
export type WarehouseUnarchiveMutationFn = Apollo.MutationFunction<WarehouseUnarchiveMutation, WarehouseUnarchiveMutationVariables>;

/**
 * __useWarehouseUnarchiveMutation__
 *
 * To run a mutation, you first call `useWarehouseUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseUnarchiveMutation, { data, loading, error }] = useWarehouseUnarchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useWarehouseUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseUnarchiveMutation, WarehouseUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseUnarchiveMutation, WarehouseUnarchiveMutationVariables>(WarehouseUnarchiveDocument, options);
      }
export type WarehouseUnarchiveMutationHookResult = ReturnType<typeof useWarehouseUnarchiveMutation>;
export type WarehouseUnarchiveMutationResult = Apollo.MutationResult<WarehouseUnarchiveMutation>;
export type WarehouseUnarchiveMutationOptions = Apollo.BaseMutationOptions<WarehouseUnarchiveMutation, WarehouseUnarchiveMutationVariables>;
export const WarehouseContractsDocument = gql`
    query WarehouseContracts($searchFilter: SearchFilter!, $view: ViewOption, $contractorUID: UUID, $clientUID: UUID, $warehouseUID: UUID) {
  warehouseContracts(
    search: $searchFilter
    view: $view
    contractorUID: $contractorUID
    clientUID: $clientUID
    warehouseUID: $warehouseUID
  ) {
    warehouseContracts {
      ...WarehouseContractFragment
    }
    total
  }
}
    ${WarehouseContractFragmentFragmentDoc}`;

/**
 * __useWarehouseContractsQuery__
 *
 * To run a query within a React component, call `useWarehouseContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehouseContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehouseContractsQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      view: // value for 'view'
 *      contractorUID: // value for 'contractorUID'
 *      clientUID: // value for 'clientUID'
 *      warehouseUID: // value for 'warehouseUID'
 *   },
 * });
 */
export function useWarehouseContractsQuery(baseOptions: Apollo.QueryHookOptions<WarehouseContractsQuery, WarehouseContractsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehouseContractsQuery, WarehouseContractsQueryVariables>(WarehouseContractsDocument, options);
      }
export function useWarehouseContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehouseContractsQuery, WarehouseContractsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehouseContractsQuery, WarehouseContractsQueryVariables>(WarehouseContractsDocument, options);
        }
export type WarehouseContractsQueryHookResult = ReturnType<typeof useWarehouseContractsQuery>;
export type WarehouseContractsLazyQueryHookResult = ReturnType<typeof useWarehouseContractsLazyQuery>;
export type WarehouseContractsQueryResult = Apollo.QueryResult<WarehouseContractsQuery, WarehouseContractsQueryVariables>;
export const WarehouseContractDocument = gql`
    query WarehouseContract($uid: UUID, $code: String) {
  warehouseContract(uid: $uid, code: $code) {
    ...WarehouseContractFragment
  }
}
    ${WarehouseContractFragmentFragmentDoc}`;

/**
 * __useWarehouseContractQuery__
 *
 * To run a query within a React component, call `useWarehouseContractQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehouseContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehouseContractQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useWarehouseContractQuery(baseOptions?: Apollo.QueryHookOptions<WarehouseContractQuery, WarehouseContractQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehouseContractQuery, WarehouseContractQueryVariables>(WarehouseContractDocument, options);
      }
export function useWarehouseContractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehouseContractQuery, WarehouseContractQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehouseContractQuery, WarehouseContractQueryVariables>(WarehouseContractDocument, options);
        }
export type WarehouseContractQueryHookResult = ReturnType<typeof useWarehouseContractQuery>;
export type WarehouseContractLazyQueryHookResult = ReturnType<typeof useWarehouseContractLazyQuery>;
export type WarehouseContractQueryResult = Apollo.QueryResult<WarehouseContractQuery, WarehouseContractQueryVariables>;
export const WarehouseContractCreateDocument = gql`
    mutation WarehouseContractCreate($input: UpdateWarehouseContract!) {
  warehouseContractCreate(input: $input) {
    ...WarehouseContractFragment
  }
}
    ${WarehouseContractFragmentFragmentDoc}`;
export type WarehouseContractCreateMutationFn = Apollo.MutationFunction<WarehouseContractCreateMutation, WarehouseContractCreateMutationVariables>;

/**
 * __useWarehouseContractCreateMutation__
 *
 * To run a mutation, you first call `useWarehouseContractCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseContractCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseContractCreateMutation, { data, loading, error }] = useWarehouseContractCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWarehouseContractCreateMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseContractCreateMutation, WarehouseContractCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseContractCreateMutation, WarehouseContractCreateMutationVariables>(WarehouseContractCreateDocument, options);
      }
export type WarehouseContractCreateMutationHookResult = ReturnType<typeof useWarehouseContractCreateMutation>;
export type WarehouseContractCreateMutationResult = Apollo.MutationResult<WarehouseContractCreateMutation>;
export type WarehouseContractCreateMutationOptions = Apollo.BaseMutationOptions<WarehouseContractCreateMutation, WarehouseContractCreateMutationVariables>;
export const WarehouseContractUpdateDocument = gql`
    mutation WarehouseContractUpdate($uid: UUID!, $input: UpdateWarehouseContract!) {
  warehouseContractUpdate(uid: $uid, input: $input) {
    ...WarehouseContractFragment
  }
}
    ${WarehouseContractFragmentFragmentDoc}`;
export type WarehouseContractUpdateMutationFn = Apollo.MutationFunction<WarehouseContractUpdateMutation, WarehouseContractUpdateMutationVariables>;

/**
 * __useWarehouseContractUpdateMutation__
 *
 * To run a mutation, you first call `useWarehouseContractUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseContractUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseContractUpdateMutation, { data, loading, error }] = useWarehouseContractUpdateMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWarehouseContractUpdateMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseContractUpdateMutation, WarehouseContractUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseContractUpdateMutation, WarehouseContractUpdateMutationVariables>(WarehouseContractUpdateDocument, options);
      }
export type WarehouseContractUpdateMutationHookResult = ReturnType<typeof useWarehouseContractUpdateMutation>;
export type WarehouseContractUpdateMutationResult = Apollo.MutationResult<WarehouseContractUpdateMutation>;
export type WarehouseContractUpdateMutationOptions = Apollo.BaseMutationOptions<WarehouseContractUpdateMutation, WarehouseContractUpdateMutationVariables>;
export const WarehouseContractFinalizeDocument = gql`
    mutation WarehouseContractFinalize($uid: UUID!) {
  warehouseContractFinalize(uid: $uid) {
    ...WarehouseContractFragment
  }
}
    ${WarehouseContractFragmentFragmentDoc}`;
export type WarehouseContractFinalizeMutationFn = Apollo.MutationFunction<WarehouseContractFinalizeMutation, WarehouseContractFinalizeMutationVariables>;

/**
 * __useWarehouseContractFinalizeMutation__
 *
 * To run a mutation, you first call `useWarehouseContractFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseContractFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseContractFinalizeMutation, { data, loading, error }] = useWarehouseContractFinalizeMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useWarehouseContractFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseContractFinalizeMutation, WarehouseContractFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseContractFinalizeMutation, WarehouseContractFinalizeMutationVariables>(WarehouseContractFinalizeDocument, options);
      }
export type WarehouseContractFinalizeMutationHookResult = ReturnType<typeof useWarehouseContractFinalizeMutation>;
export type WarehouseContractFinalizeMutationResult = Apollo.MutationResult<WarehouseContractFinalizeMutation>;
export type WarehouseContractFinalizeMutationOptions = Apollo.BaseMutationOptions<WarehouseContractFinalizeMutation, WarehouseContractFinalizeMutationVariables>;
export const WarehouseContractAcceptDocument = gql`
    mutation WarehouseContractAccept($uid: UUID!) {
  warehouseContractAccept(uid: $uid) {
    ...WarehouseContractFragment
  }
}
    ${WarehouseContractFragmentFragmentDoc}`;
export type WarehouseContractAcceptMutationFn = Apollo.MutationFunction<WarehouseContractAcceptMutation, WarehouseContractAcceptMutationVariables>;

/**
 * __useWarehouseContractAcceptMutation__
 *
 * To run a mutation, you first call `useWarehouseContractAcceptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseContractAcceptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseContractAcceptMutation, { data, loading, error }] = useWarehouseContractAcceptMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useWarehouseContractAcceptMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseContractAcceptMutation, WarehouseContractAcceptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseContractAcceptMutation, WarehouseContractAcceptMutationVariables>(WarehouseContractAcceptDocument, options);
      }
export type WarehouseContractAcceptMutationHookResult = ReturnType<typeof useWarehouseContractAcceptMutation>;
export type WarehouseContractAcceptMutationResult = Apollo.MutationResult<WarehouseContractAcceptMutation>;
export type WarehouseContractAcceptMutationOptions = Apollo.BaseMutationOptions<WarehouseContractAcceptMutation, WarehouseContractAcceptMutationVariables>;
export const WarehouseContractDeclineDocument = gql`
    mutation WarehouseContractDecline($uid: UUID!) {
  warehouseContractDecline(uid: $uid) {
    ...WarehouseContractFragment
  }
}
    ${WarehouseContractFragmentFragmentDoc}`;
export type WarehouseContractDeclineMutationFn = Apollo.MutationFunction<WarehouseContractDeclineMutation, WarehouseContractDeclineMutationVariables>;

/**
 * __useWarehouseContractDeclineMutation__
 *
 * To run a mutation, you first call `useWarehouseContractDeclineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseContractDeclineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseContractDeclineMutation, { data, loading, error }] = useWarehouseContractDeclineMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useWarehouseContractDeclineMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseContractDeclineMutation, WarehouseContractDeclineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseContractDeclineMutation, WarehouseContractDeclineMutationVariables>(WarehouseContractDeclineDocument, options);
      }
export type WarehouseContractDeclineMutationHookResult = ReturnType<typeof useWarehouseContractDeclineMutation>;
export type WarehouseContractDeclineMutationResult = Apollo.MutationResult<WarehouseContractDeclineMutation>;
export type WarehouseContractDeclineMutationOptions = Apollo.BaseMutationOptions<WarehouseContractDeclineMutation, WarehouseContractDeclineMutationVariables>;
export const WarehouseContractArchiveDocument = gql`
    mutation WarehouseContractArchive($uid: UUID!) {
  warehouseContractArchive(uid: $uid) {
    ...WarehouseContractFragment
  }
}
    ${WarehouseContractFragmentFragmentDoc}`;
export type WarehouseContractArchiveMutationFn = Apollo.MutationFunction<WarehouseContractArchiveMutation, WarehouseContractArchiveMutationVariables>;

/**
 * __useWarehouseContractArchiveMutation__
 *
 * To run a mutation, you first call `useWarehouseContractArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseContractArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseContractArchiveMutation, { data, loading, error }] = useWarehouseContractArchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useWarehouseContractArchiveMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseContractArchiveMutation, WarehouseContractArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseContractArchiveMutation, WarehouseContractArchiveMutationVariables>(WarehouseContractArchiveDocument, options);
      }
export type WarehouseContractArchiveMutationHookResult = ReturnType<typeof useWarehouseContractArchiveMutation>;
export type WarehouseContractArchiveMutationResult = Apollo.MutationResult<WarehouseContractArchiveMutation>;
export type WarehouseContractArchiveMutationOptions = Apollo.BaseMutationOptions<WarehouseContractArchiveMutation, WarehouseContractArchiveMutationVariables>;
export const WarehouseContractUnarchiveDocument = gql`
    mutation WarehouseContractUnarchive($uid: UUID!) {
  warehouseContractUnarchive(uid: $uid) {
    ...WarehouseContractFragment
  }
}
    ${WarehouseContractFragmentFragmentDoc}`;
export type WarehouseContractUnarchiveMutationFn = Apollo.MutationFunction<WarehouseContractUnarchiveMutation, WarehouseContractUnarchiveMutationVariables>;

/**
 * __useWarehouseContractUnarchiveMutation__
 *
 * To run a mutation, you first call `useWarehouseContractUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseContractUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseContractUnarchiveMutation, { data, loading, error }] = useWarehouseContractUnarchiveMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useWarehouseContractUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseContractUnarchiveMutation, WarehouseContractUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseContractUnarchiveMutation, WarehouseContractUnarchiveMutationVariables>(WarehouseContractUnarchiveDocument, options);
      }
export type WarehouseContractUnarchiveMutationHookResult = ReturnType<typeof useWarehouseContractUnarchiveMutation>;
export type WarehouseContractUnarchiveMutationResult = Apollo.MutationResult<WarehouseContractUnarchiveMutation>;
export type WarehouseContractUnarchiveMutationOptions = Apollo.BaseMutationOptions<WarehouseContractUnarchiveMutation, WarehouseContractUnarchiveMutationVariables>;
export const WarehouseTypesDocument = gql`
    query WarehouseTypes($searchFilter: SearchFilter!) {
  warehouseTypes(search: $searchFilter) {
    warehouseTypes {
      ...WarehouseTypeFragment
    }
    total
  }
}
    ${WarehouseTypeFragmentFragmentDoc}`;

/**
 * __useWarehouseTypesQuery__
 *
 * To run a query within a React component, call `useWarehouseTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehouseTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehouseTypesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function useWarehouseTypesQuery(baseOptions: Apollo.QueryHookOptions<WarehouseTypesQuery, WarehouseTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehouseTypesQuery, WarehouseTypesQueryVariables>(WarehouseTypesDocument, options);
      }
export function useWarehouseTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehouseTypesQuery, WarehouseTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehouseTypesQuery, WarehouseTypesQueryVariables>(WarehouseTypesDocument, options);
        }
export type WarehouseTypesQueryHookResult = ReturnType<typeof useWarehouseTypesQuery>;
export type WarehouseTypesLazyQueryHookResult = ReturnType<typeof useWarehouseTypesLazyQuery>;
export type WarehouseTypesQueryResult = Apollo.QueryResult<WarehouseTypesQuery, WarehouseTypesQueryVariables>;
export const WarehouseTypeDocument = gql`
    query WarehouseType($id: ID, $code: String) {
  warehouseType(id: $id, code: $code) {
    ...WarehouseTypeFragment
  }
}
    ${WarehouseTypeFragmentFragmentDoc}`;

/**
 * __useWarehouseTypeQuery__
 *
 * To run a query within a React component, call `useWarehouseTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehouseTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehouseTypeQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useWarehouseTypeQuery(baseOptions?: Apollo.QueryHookOptions<WarehouseTypeQuery, WarehouseTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehouseTypeQuery, WarehouseTypeQueryVariables>(WarehouseTypeDocument, options);
      }
export function useWarehouseTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehouseTypeQuery, WarehouseTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehouseTypeQuery, WarehouseTypeQueryVariables>(WarehouseTypeDocument, options);
        }
export type WarehouseTypeQueryHookResult = ReturnType<typeof useWarehouseTypeQuery>;
export type WarehouseTypeLazyQueryHookResult = ReturnType<typeof useWarehouseTypeLazyQuery>;
export type WarehouseTypeQueryResult = Apollo.QueryResult<WarehouseTypeQuery, WarehouseTypeQueryVariables>;
export const WarehouseTypeCreateDocument = gql`
    mutation WarehouseTypeCreate($input: UpdateWarehouseType!) {
  warehouseTypeCreate(input: $input) {
    ...WarehouseTypeFragment
  }
}
    ${WarehouseTypeFragmentFragmentDoc}`;
export type WarehouseTypeCreateMutationFn = Apollo.MutationFunction<WarehouseTypeCreateMutation, WarehouseTypeCreateMutationVariables>;

/**
 * __useWarehouseTypeCreateMutation__
 *
 * To run a mutation, you first call `useWarehouseTypeCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseTypeCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseTypeCreateMutation, { data, loading, error }] = useWarehouseTypeCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWarehouseTypeCreateMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseTypeCreateMutation, WarehouseTypeCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseTypeCreateMutation, WarehouseTypeCreateMutationVariables>(WarehouseTypeCreateDocument, options);
      }
export type WarehouseTypeCreateMutationHookResult = ReturnType<typeof useWarehouseTypeCreateMutation>;
export type WarehouseTypeCreateMutationResult = Apollo.MutationResult<WarehouseTypeCreateMutation>;
export type WarehouseTypeCreateMutationOptions = Apollo.BaseMutationOptions<WarehouseTypeCreateMutation, WarehouseTypeCreateMutationVariables>;
export const WarehouseTypeUpdateDocument = gql`
    mutation WarehouseTypeUpdate($id: ID!, $input: UpdateWarehouseType!) {
  warehouseTypeUpdate(id: $id, input: $input) {
    ...WarehouseTypeFragment
  }
}
    ${WarehouseTypeFragmentFragmentDoc}`;
export type WarehouseTypeUpdateMutationFn = Apollo.MutationFunction<WarehouseTypeUpdateMutation, WarehouseTypeUpdateMutationVariables>;

/**
 * __useWarehouseTypeUpdateMutation__
 *
 * To run a mutation, you first call `useWarehouseTypeUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseTypeUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseTypeUpdateMutation, { data, loading, error }] = useWarehouseTypeUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWarehouseTypeUpdateMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseTypeUpdateMutation, WarehouseTypeUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseTypeUpdateMutation, WarehouseTypeUpdateMutationVariables>(WarehouseTypeUpdateDocument, options);
      }
export type WarehouseTypeUpdateMutationHookResult = ReturnType<typeof useWarehouseTypeUpdateMutation>;
export type WarehouseTypeUpdateMutationResult = Apollo.MutationResult<WarehouseTypeUpdateMutation>;
export type WarehouseTypeUpdateMutationOptions = Apollo.BaseMutationOptions<WarehouseTypeUpdateMutation, WarehouseTypeUpdateMutationVariables>;
export const WarehouseTypeFinalizeDocument = gql`
    mutation WarehouseTypeFinalize($id: ID!) {
  warehouseTypeFinalize(id: $id) {
    ...WarehouseTypeFragment
  }
}
    ${WarehouseTypeFragmentFragmentDoc}`;
export type WarehouseTypeFinalizeMutationFn = Apollo.MutationFunction<WarehouseTypeFinalizeMutation, WarehouseTypeFinalizeMutationVariables>;

/**
 * __useWarehouseTypeFinalizeMutation__
 *
 * To run a mutation, you first call `useWarehouseTypeFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseTypeFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseTypeFinalizeMutation, { data, loading, error }] = useWarehouseTypeFinalizeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWarehouseTypeFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseTypeFinalizeMutation, WarehouseTypeFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseTypeFinalizeMutation, WarehouseTypeFinalizeMutationVariables>(WarehouseTypeFinalizeDocument, options);
      }
export type WarehouseTypeFinalizeMutationHookResult = ReturnType<typeof useWarehouseTypeFinalizeMutation>;
export type WarehouseTypeFinalizeMutationResult = Apollo.MutationResult<WarehouseTypeFinalizeMutation>;
export type WarehouseTypeFinalizeMutationOptions = Apollo.BaseMutationOptions<WarehouseTypeFinalizeMutation, WarehouseTypeFinalizeMutationVariables>;
export const WarehouseTypeArchiveDocument = gql`
    mutation WarehouseTypeArchive($id: ID!) {
  warehouseTypeArchive(id: $id) {
    ...WarehouseTypeFragment
  }
}
    ${WarehouseTypeFragmentFragmentDoc}`;
export type WarehouseTypeArchiveMutationFn = Apollo.MutationFunction<WarehouseTypeArchiveMutation, WarehouseTypeArchiveMutationVariables>;

/**
 * __useWarehouseTypeArchiveMutation__
 *
 * To run a mutation, you first call `useWarehouseTypeArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseTypeArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseTypeArchiveMutation, { data, loading, error }] = useWarehouseTypeArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWarehouseTypeArchiveMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseTypeArchiveMutation, WarehouseTypeArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseTypeArchiveMutation, WarehouseTypeArchiveMutationVariables>(WarehouseTypeArchiveDocument, options);
      }
export type WarehouseTypeArchiveMutationHookResult = ReturnType<typeof useWarehouseTypeArchiveMutation>;
export type WarehouseTypeArchiveMutationResult = Apollo.MutationResult<WarehouseTypeArchiveMutation>;
export type WarehouseTypeArchiveMutationOptions = Apollo.BaseMutationOptions<WarehouseTypeArchiveMutation, WarehouseTypeArchiveMutationVariables>;
export const WarehouseTypeUnarchiveDocument = gql`
    mutation WarehouseTypeUnarchive($id: ID!) {
  warehouseTypeUnarchive(id: $id) {
    ...WarehouseTypeFragment
  }
}
    ${WarehouseTypeFragmentFragmentDoc}`;
export type WarehouseTypeUnarchiveMutationFn = Apollo.MutationFunction<WarehouseTypeUnarchiveMutation, WarehouseTypeUnarchiveMutationVariables>;

/**
 * __useWarehouseTypeUnarchiveMutation__
 *
 * To run a mutation, you first call `useWarehouseTypeUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWarehouseTypeUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [warehouseTypeUnarchiveMutation, { data, loading, error }] = useWarehouseTypeUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWarehouseTypeUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<WarehouseTypeUnarchiveMutation, WarehouseTypeUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WarehouseTypeUnarchiveMutation, WarehouseTypeUnarchiveMutationVariables>(WarehouseTypeUnarchiveDocument, options);
      }
export type WarehouseTypeUnarchiveMutationHookResult = ReturnType<typeof useWarehouseTypeUnarchiveMutation>;
export type WarehouseTypeUnarchiveMutationResult = Apollo.MutationResult<WarehouseTypeUnarchiveMutation>;
export type WarehouseTypeUnarchiveMutationOptions = Apollo.BaseMutationOptions<WarehouseTypeUnarchiveMutation, WarehouseTypeUnarchiveMutationVariables>;