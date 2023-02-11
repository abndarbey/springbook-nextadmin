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

export type AuthPayload = {
  __typename?: 'AuthPayload';
  tokenString: Scalars['String'];
};

export type Auther = {
  __typename?: 'Auther';
  id?: Maybe<Scalars['ID']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orgUID?: Maybe<Scalars['NullUUID']>;
  roleID?: Maybe<Scalars['NullInt64']>;
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

export type LoginRequest = {
  email?: InputMaybe<Scalars['NullString']>;
  otp?: InputMaybe<Scalars['NullString']>;
  phone?: InputMaybe<Scalars['NullString']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  batchCatalogueArchive: BatchCatalogue;
  batchCatalogueCreate: BatchCatalogue;
  batchCatalogueFinalize: BatchCatalogue;
  batchCatalogueUnarchive: BatchCatalogue;
  batchCatalogueUpdate: BatchCatalogue;
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
  departmentArchive: Department;
  departmentCreate: Department;
  departmentFinalize: Department;
  departmentUnarchive: Department;
  departmentUpdate: Department;
  deploySmartContract: Settings;
  fileUpload: File;
  fileUploadMultiple: Array<File>;
  generateOTP?: Maybe<Scalars['String']>;
  login: AuthPayload;
  organizationArchive: Organization;
  organizationRegister: Organization;
  organizationUnarchive: Organization;
  organizationUpdate: Organization;
  palletArchive: Pallet;
  palletCreate: Pallet;
  palletFinalize: Pallet;
  palletTypeArchive: PalletType;
  palletTypeCreate: PalletType;
  palletTypeFinalize: PalletType;
  palletTypeUnarchive: PalletType;
  palletTypeUpdate: PalletType;
  palletUnarchive: Pallet;
  palletUpdate: Pallet;
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
  skuCatalogueArchive: SkuCatalogue;
  skuCatalogueCreate: SkuCatalogue;
  skuCatalogueFinalize: SkuCatalogue;
  skuCatalogueUnarchive: SkuCatalogue;
  skuCatalogueUpdate: SkuCatalogue;
  superAdminCreate: User;
  thirdPartyWarehouseArchive: ThirdPartyWarehouse;
  thirdPartyWarehouseCreate: ThirdPartyWarehouse;
  thirdPartyWarehouseFinalize: ThirdPartyWarehouse;
  thirdPartyWarehouseUnarchive: ThirdPartyWarehouse;
  thirdPartyWarehouseUpdate: ThirdPartyWarehouse;
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
  input?: InputMaybe<OtpRequest>;
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
  uid: Scalars['UUID'];
};


export type MutationPalletCreateArgs = {
  input: UpdatePallet;
};


export type MutationPalletFinalizeArgs = {
  uid: Scalars['UUID'];
};


export type MutationPalletTypeArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationPalletTypeCreateArgs = {
  input: UpdatePalletType;
};


export type MutationPalletTypeFinalizeArgs = {
  id: Scalars['ID'];
};


export type MutationPalletTypeUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationPalletTypeUpdateArgs = {
  id: Scalars['ID'];
  input: UpdatePalletType;
};


export type MutationPalletUnarchiveArgs = {
  uid: Scalars['UUID'];
};


export type MutationPalletUpdateArgs = {
  input: UpdatePallet;
  uid: Scalars['UUID'];
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


export type MutationSuperAdminCreateArgs = {
  input: UpdateUser;
};


export type MutationThirdPartyWarehouseArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationThirdPartyWarehouseCreateArgs = {
  input: UpdateThirdPartyWarehouse;
};


export type MutationThirdPartyWarehouseFinalizeArgs = {
  id: Scalars['ID'];
};


export type MutationThirdPartyWarehouseUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationThirdPartyWarehouseUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateThirdPartyWarehouse;
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
  email?: InputMaybe<Scalars['NullString']>;
  phone?: InputMaybe<Scalars['NullString']>;
};

export type Organization = {
  __typename?: 'Organization';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['ID']>;
  isAllocated?: Maybe<Scalars['Boolean']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  isOccupied?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<Organization>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<PalletType>;
  uid?: Maybe<Scalars['UUID']>;
  warehouse?: Maybe<Warehouse>;
};

export type PalletType = {
  __typename?: 'PalletType';
  breadth?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  status?: Maybe<Scalars['String']>;
  weightCapacity?: Maybe<Scalars['Float']>;
  weightUnit?: Maybe<Scalars['String']>;
};

export type PalletTypesResult = {
  __typename?: 'PalletTypesResult';
  palletTypes: Array<PalletType>;
  total: Scalars['Int'];
};

export type PalletsResult = {
  __typename?: 'PalletsResult';
  pallets: Array<Pallet>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  auther: Auther;
  batchCatalogue: BatchCatalogue;
  batchCatalogues: BatchCataloguesResult;
  cell: Cell;
  cells: CellsResult;
  contact: Contact;
  contacts: ContactsResult;
  department: Department;
  departments: DepartmentsResult;
  ethereumAccountAddress: Scalars['String'];
  ethereumAccountBalance: Scalars['String'];
  getTickerInfo: TickerInfo;
  me: User;
  organization: Organization;
  organizations: OrganizationsResult;
  pallet: Pallet;
  palletType: PalletType;
  palletTypes: PalletTypesResult;
  pallets: PalletsResult;
  pendingTransactionsCount: Scalars['Int'];
  rack: Rack;
  rackType: RackType;
  rackTypes: RackTypesResult;
  racks: RacksResult;
  role: Role;
  roles: RolesResult;
  settings: Settings;
  skuCatalogue: SkuCatalogue;
  skuCatalogues: SkuCataloguesResult;
  thirdPartyWarehouse: ThirdPartyWarehouse;
  thirdPartyWarehouses: ThirdPartyWarehousesResult;
  user: User;
  users: UserResult;
  warehouse: Warehouse;
  warehouseContract: WarehouseContract;
  warehouseContracts: WarehouseContractsResult;
  warehouseType: WarehouseType;
  warehouseTypes: WarehouseTypesResult;
  warehouses: WarehousesResult;
};


export type QueryBatchCatalogueArgs = {
  code?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryBatchCataloguesArgs = {
  orgUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
  skuUID?: InputMaybe<Scalars['UUID']>;
};


export type QueryCellArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCellsArgs = {
  orgUID?: InputMaybe<Scalars['UUID']>;
  rackID?: InputMaybe<Scalars['ID']>;
  search: SearchFilter;
  warehouseUID?: InputMaybe<Scalars['UUID']>;
};


export type QueryContactArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContactsArgs = {
  orgUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
};


export type QueryDepartmentArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentsArgs = {
  orgUID?: InputMaybe<Scalars['UUID']>;
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
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QueryPalletTypeArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPalletTypesArgs = {
  orgUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
};


export type QueryPalletsArgs = {
  orgUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
  typeID?: InputMaybe<Scalars['ID']>;
  warehouseUID?: InputMaybe<Scalars['UUID']>;
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
  orgUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
};


export type QueryRacksArgs = {
  orgUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
  typeID?: InputMaybe<Scalars['ID']>;
  warehouseUID?: InputMaybe<Scalars['UUID']>;
};


export type QueryRoleArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRolesArgs = {
  deptID?: InputMaybe<Scalars['ID']>;
  orgUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
};


export type QuerySkuCatalogueArgs = {
  code?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['UUID']>;
};


export type QuerySkuCataloguesArgs = {
  orgUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
};


export type QueryThirdPartyWarehouseArgs = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryThirdPartyWarehousesArgs = {
  operatorUID?: InputMaybe<Scalars['UUID']>;
  orgUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  orgUID?: InputMaybe<Scalars['UUID']>;
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
  orgUID?: InputMaybe<Scalars['UUID']>;
  search: SearchFilter;
};


export type QueryWarehousesArgs = {
  orgUID?: InputMaybe<Scalars['UUID']>;
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
  search?: InputMaybe<Scalars['NullString']>;
  sortBy?: InputMaybe<SortByOption>;
  sortDir?: InputMaybe<SortDir>;
};

export type Settings = {
  __typename?: 'Settings';
  adminHost: Scalars['String'];
  consumerHost: Scalars['String'];
  etherscanHost: Scalars['String'];
  fieldappVersion: Scalars['String'];
  smartContractAddress: Scalars['String'];
};

export type SkuCatalogue = {
  __typename?: 'SkuCatalogue';
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

export type ThirdPartyWarehouse = {
  __typename?: 'ThirdPartyWarehouse';
  address?: Maybe<WarehouseAddress>;
  code?: Maybe<Scalars['String']>;
  contract?: Maybe<WarehouseContract>;
  createdAt?: Maybe<Scalars['Time']>;
  details?: Maybe<Scalars['NullString']>;
  dimension?: Maybe<WarehouseDimension>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  operator?: Maybe<Organization>;
  organization?: Maybe<Organization>;
  specifications?: Maybe<WarehouseSpecification>;
  status?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Warehouse>;
};

export type ThirdPartyWarehousesResult = {
  __typename?: 'ThirdPartyWarehousesResult';
  thirdPartyWarehouses: Array<ThirdPartyWarehouse>;
  total: Scalars['Int'];
};

export type TickerInfo = {
  __typename?: 'TickerInfo';
  lastTick: Scalars['Time'];
  tickInterval: Scalars['Int'];
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
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
  typeID?: InputMaybe<Scalars['NullInt64']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
};

export type UpdatePalletType = {
  breadth?: InputMaybe<Scalars['NullFloat']>;
  length?: InputMaybe<Scalars['NullFloat']>;
  name?: InputMaybe<Scalars['NullString']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
  weightCapacity?: InputMaybe<Scalars['NullFloat']>;
  weightUnit?: InputMaybe<Scalars['NullString']>;
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

export type UpdateThirdPartyWarehouse = {
  operatorUID?: InputMaybe<Scalars['NullUUID']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  status?: InputMaybe<Scalars['NullString']>;
  warehouseUID?: InputMaybe<Scalars['NullUUID']>;
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
  address?: InputMaybe<WarehouseAddressInput>;
  details?: InputMaybe<Scalars['NullString']>;
  dimension?: InputMaybe<WarehouseDimensionInput>;
  location?: InputMaybe<Scalars['NullString']>;
  name?: InputMaybe<Scalars['NullString']>;
  orgUID?: InputMaybe<Scalars['NullUUID']>;
  specifications?: InputMaybe<WarehouseSpecificationInput>;
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
  address?: Maybe<WarehouseAddress>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  details?: Maybe<Scalars['NullString']>;
  dimension?: Maybe<WarehouseDimension>;
  id?: Maybe<Scalars['ID']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['NullString']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  specifications?: Maybe<WarehouseSpecification>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<WarehouseType>;
  uid?: Maybe<Scalars['UUID']>;
};

export type WarehouseAddress = {
  __typename?: 'WarehouseAddress';
  city?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  pincode?: Maybe<Scalars['String']>;
};

export type WarehouseAddressInput = {
  city: Scalars['String'];
  locality: Scalars['String'];
  pincode: Scalars['String'];
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
  buildUpArea?: Maybe<Scalars['Float']>;
  buildUpBreadth?: Maybe<Scalars['Float']>;
  buildUpLength?: Maybe<Scalars['Float']>;
  carpetArea?: Maybe<Scalars['Float']>;
  carpetBreadth?: Maybe<Scalars['Float']>;
  carpetLength?: Maybe<Scalars['Float']>;
  centralHeight?: Maybe<Scalars['Float']>;
  wallHeight?: Maybe<Scalars['Float']>;
};

export type WarehouseDimensionInput = {
  buildUpArea: Scalars['Float'];
  buildUpBreadth: Scalars['Float'];
  buildUpLength: Scalars['Float'];
  carpetArea: Scalars['Float'];
  carpetBreadth: Scalars['Float'];
  carpetLength: Scalars['Float'];
  centralHeight: Scalars['Float'];
  wallHeight: Scalars['Float'];
};

export type WarehouseSpecification = {
  __typename?: 'WarehouseSpecification';
  floorType?: Maybe<Scalars['String']>;
  shedType?: Maybe<Scalars['String']>;
};

export type WarehouseSpecificationInput = {
  floorType: Scalars['String'];
  shedType: Scalars['String'];
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


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', tokenString: string } };

export type OrganizationRegisterMutationVariables = Exact<{
  input: RegisterOrganization;
}>;


export type OrganizationRegisterMutation = { __typename?: 'Mutation', organizationRegister: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null } };

export type BatchCataloguesQueryVariables = Exact<{
  searchFilter: SearchFilter;
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


export type SkuCataloguesQuery = { __typename?: 'Query', skuCatalogues: { __typename?: 'SkuCataloguesResult', total: number, skuCatalogues: Array<{ __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type SkuCatalogueQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type SkuCatalogueQuery = { __typename?: 'Query', skuCatalogue: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCatalogueCreateMutationVariables = Exact<{
  input: UpdateSkuCatalogue;
}>;


export type SkuCatalogueCreateMutation = { __typename?: 'Mutation', skuCatalogueCreate: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCatalogueUpdateMutationVariables = Exact<{
  uid: Scalars['UUID'];
  input: UpdateSkuCatalogue;
}>;


export type SkuCatalogueUpdateMutation = { __typename?: 'Mutation', skuCatalogueUpdate: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCatalogueFinalizeMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type SkuCatalogueFinalizeMutation = { __typename?: 'Mutation', skuCatalogueFinalize: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCatalogueArchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type SkuCatalogueArchiveMutation = { __typename?: 'Mutation', skuCatalogueArchive: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type SkuCatalogueUnarchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type SkuCatalogueUnarchiveMutation = { __typename?: 'Mutation', skuCatalogueUnarchive: { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ContactsQueryVariables = Exact<{
  searchFilter: SearchFilter;
  orgUID?: InputMaybe<Scalars['UUID']>;
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
  orgUID?: InputMaybe<Scalars['UUID']>;
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
}>;


export type OrganizationsQuery = { __typename?: 'Query', organizations: { __typename?: 'OrganizationsResult', total: number, organizations: Array<{ __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null }> } };

export type OrganizationQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type OrganizationQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null } };

export type OrganizationUpdateMutationVariables = Exact<{
  uid: Scalars['UUID'];
  input: UpdateOrganization;
}>;


export type OrganizationUpdateMutation = { __typename?: 'Mutation', organizationUpdate: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null } };

export type OrganizationArchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type OrganizationArchiveMutation = { __typename?: 'Mutation', organizationArchive: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null } };

export type OrganizationUnarchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type OrganizationUnarchiveMutation = { __typename?: 'Mutation', organizationUnarchive: { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null } };

export type RolesQueryVariables = Exact<{
  searchFilter: SearchFilter;
  orgUID?: InputMaybe<Scalars['UUID']>;
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
  orgUID?: InputMaybe<Scalars['UUID']>;
  roleID?: InputMaybe<Scalars['ID']>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserResult', total: number, users: Array<{ __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, role?: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type UserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
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

export type SkuCatalogueFragmentFragment = { __typename?: 'SkuCatalogue', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, hsnCode?: string | null, brand?: string | null, description?: string | null, ingredients?: string | null, weight?: number | null, weightUnit?: string | null, parentSkuUID?: any | null, isParent?: boolean | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, masterPhoto?: { __typename?: 'File', name: string, url: string } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type BatchCatalogueFragmentFragment = { __typename?: 'BatchCatalogue', id?: string | null, uid?: any | null, code?: string | null, batchNumber?: string | null, description?: string | null, productionDate?: any | null, expiryDate?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, sku?: { __typename?: 'SkuCatalogue', uid?: any | null, code?: string | null, name?: string | null } | null };

export type OrganizationFragmentFragment = { __typename?: 'Organization', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, website?: any | null, sector?: string | null, isArchived?: boolean | null, createdAt?: any | null, logo?: { __typename?: 'File', name: string, url: string } | null };

export type DepartmentFragmentFragment = { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, updatedAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type RoleFragmentFragment = { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, permissions?: Array<string> | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, department?: { __typename?: 'Department', id?: string | null, code?: string | null, name?: string | null } | null };

export type UserFragmentFragment = { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, role?: { __typename?: 'Role', id?: string | null, code?: string | null, name?: string | null, isManagement?: boolean | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type ContactFragmentFragment = { __typename?: 'Contact', id?: string | null, code?: string | null, companyUID?: any | null, name?: string | null, website?: any | null, sector?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type AutherFragmentFragment = { __typename?: 'Auther', id?: string | null, isAdmin?: boolean | null, orgUID?: any | null, roleID?: any | null };

export type AuthPayloadFragmentFragment = { __typename?: 'AuthPayload', tokenString: string };

export type WarehouseTypeFragmentFragment = { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type RackTypeFragmentFragment = { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null, storageType?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, storageDimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type PalletTypeFragmentFragment = { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null, length?: number | null, breadth?: number | null, weightCapacity?: number | null, weightUnit?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type WarehouseFragmentFragment = { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type RackFragmentFragment = { __typename?: 'Rack', id?: string | null, code?: string | null, rows?: number | null, columns?: number | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'StorageDimension', length?: number | null, breadth?: number | null, height?: number | null, unit?: string | null } | null, type?: { __typename?: 'RackType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type CellFragmentFragment = { __typename?: 'Cell', id?: string | null, code?: string | null, row?: number | null, col?: number | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, rack?: { __typename?: 'Rack', id?: string | null, code?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type PalletFragmentFragment = { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, type?: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type WarehouseContractFragmentFragment = { __typename?: 'WarehouseContract', id?: string | null, uid?: any | null, code?: string | null, message?: any | null, status?: string | null, acceptanceStatus?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, isAccepted?: boolean | null, createdAt?: any | null, contractor?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, client?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null };

export type ThirdPartyWarehouseFragmentFragment = { __typename?: 'ThirdPartyWarehouse', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, contract?: { __typename?: 'WarehouseContract', uid?: any | null, code?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null };

export type CellsQueryVariables = Exact<{
  searchFilter: SearchFilter;
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

export type PalletsQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type PalletsQuery = { __typename?: 'Query', pallets: { __typename?: 'PalletsResult', total: number, pallets: Array<{ __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, type?: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type PalletQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type PalletQuery = { __typename?: 'Query', pallet: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, type?: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletCreateMutationVariables = Exact<{
  input: UpdatePallet;
}>;


export type PalletCreateMutation = { __typename?: 'Mutation', palletCreate: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, type?: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletUpdateMutationVariables = Exact<{
  uid: Scalars['UUID'];
  input: UpdatePallet;
}>;


export type PalletUpdateMutation = { __typename?: 'Mutation', palletUpdate: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, type?: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletFinalizeMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type PalletFinalizeMutation = { __typename?: 'Mutation', palletFinalize: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, type?: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletArchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type PalletArchiveMutation = { __typename?: 'Mutation', palletArchive: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, type?: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletUnarchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type PalletUnarchiveMutation = { __typename?: 'Mutation', palletUnarchive: { __typename?: 'Pallet', id?: string | null, uid?: any | null, code?: string | null, status?: string | null, isAllocated?: boolean | null, isOccupied?: boolean | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, type?: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletTypesQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type PalletTypesQuery = { __typename?: 'Query', palletTypes: { __typename?: 'PalletTypesResult', total: number, palletTypes: Array<{ __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null, length?: number | null, breadth?: number | null, weightCapacity?: number | null, weightUnit?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type PalletTypeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type PalletTypeQuery = { __typename?: 'Query', palletType: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null, length?: number | null, breadth?: number | null, weightCapacity?: number | null, weightUnit?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletTypeCreateMutationVariables = Exact<{
  input: UpdatePalletType;
}>;


export type PalletTypeCreateMutation = { __typename?: 'Mutation', palletTypeCreate: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null, length?: number | null, breadth?: number | null, weightCapacity?: number | null, weightUnit?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletTypeUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdatePalletType;
}>;


export type PalletTypeUpdateMutation = { __typename?: 'Mutation', palletTypeUpdate: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null, length?: number | null, breadth?: number | null, weightCapacity?: number | null, weightUnit?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletTypeFinalizeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PalletTypeFinalizeMutation = { __typename?: 'Mutation', palletTypeFinalize: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null, length?: number | null, breadth?: number | null, weightCapacity?: number | null, weightUnit?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletTypeArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PalletTypeArchiveMutation = { __typename?: 'Mutation', palletTypeArchive: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null, length?: number | null, breadth?: number | null, weightCapacity?: number | null, weightUnit?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type PalletTypeUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PalletTypeUnarchiveMutation = { __typename?: 'Mutation', palletTypeUnarchive: { __typename?: 'PalletType', id?: string | null, code?: string | null, name?: string | null, length?: number | null, breadth?: number | null, weightCapacity?: number | null, weightUnit?: string | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type RacksQueryVariables = Exact<{
  searchFilter: SearchFilter;
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

export type ThirdPartyWarehousesQueryVariables = Exact<{
  searchFilter: SearchFilter;
}>;


export type ThirdPartyWarehousesQuery = { __typename?: 'Query', thirdPartyWarehouses: { __typename?: 'ThirdPartyWarehousesResult', total: number, thirdPartyWarehouses: Array<{ __typename?: 'ThirdPartyWarehouse', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, contract?: { __typename?: 'WarehouseContract', uid?: any | null, code?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type ThirdPartyWarehouseQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type ThirdPartyWarehouseQuery = { __typename?: 'Query', thirdPartyWarehouse: { __typename?: 'ThirdPartyWarehouse', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, contract?: { __typename?: 'WarehouseContract', uid?: any | null, code?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ThirdPartyWarehouseCreateMutationVariables = Exact<{
  input: UpdateThirdPartyWarehouse;
}>;


export type ThirdPartyWarehouseCreateMutation = { __typename?: 'Mutation', thirdPartyWarehouseCreate: { __typename?: 'ThirdPartyWarehouse', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, contract?: { __typename?: 'WarehouseContract', uid?: any | null, code?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ThirdPartyWarehouseUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateThirdPartyWarehouse;
}>;


export type ThirdPartyWarehouseUpdateMutation = { __typename?: 'Mutation', thirdPartyWarehouseUpdate: { __typename?: 'ThirdPartyWarehouse', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, contract?: { __typename?: 'WarehouseContract', uid?: any | null, code?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ThirdPartyWarehouseFinalizeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ThirdPartyWarehouseFinalizeMutation = { __typename?: 'Mutation', thirdPartyWarehouseFinalize: { __typename?: 'ThirdPartyWarehouse', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, contract?: { __typename?: 'WarehouseContract', uid?: any | null, code?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ThirdPartyWarehouseArchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ThirdPartyWarehouseArchiveMutation = { __typename?: 'Mutation', thirdPartyWarehouseArchive: { __typename?: 'ThirdPartyWarehouse', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, contract?: { __typename?: 'WarehouseContract', uid?: any | null, code?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type ThirdPartyWarehouseUnarchiveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ThirdPartyWarehouseUnarchiveMutation = { __typename?: 'Mutation', thirdPartyWarehouseUnarchive: { __typename?: 'ThirdPartyWarehouse', id?: string | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, warehouse?: { __typename?: 'Warehouse', uid?: any | null, code?: string | null, name?: string | null } | null, contract?: { __typename?: 'WarehouseContract', uid?: any | null, code?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehousesQueryVariables = Exact<{
  searchFilter: SearchFilter;
  orgUID?: InputMaybe<Scalars['UUID']>;
}>;


export type WarehousesQuery = { __typename?: 'Query', warehouses: { __typename?: 'WarehousesResult', total: number, warehouses: Array<{ __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null }> } };

export type WarehouseQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['UUID']>;
  code?: InputMaybe<Scalars['String']>;
}>;


export type WarehouseQuery = { __typename?: 'Query', warehouse: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseCreateMutationVariables = Exact<{
  input: UpdateWarehouse;
}>;


export type WarehouseCreateMutation = { __typename?: 'Mutation', warehouseCreate: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseUpdateMutationVariables = Exact<{
  uid: Scalars['UUID'];
  input: UpdateWarehouse;
}>;


export type WarehouseUpdateMutation = { __typename?: 'Mutation', warehouseUpdate: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseFinalizeMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseFinalizeMutation = { __typename?: 'Mutation', warehouseFinalize: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseArchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseArchiveMutation = { __typename?: 'Mutation', warehouseArchive: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

export type WarehouseUnarchiveMutationVariables = Exact<{
  uid: Scalars['UUID'];
}>;


export type WarehouseUnarchiveMutation = { __typename?: 'Mutation', warehouseUnarchive: { __typename?: 'Warehouse', id?: string | null, uid?: any | null, code?: string | null, name?: string | null, details?: any | null, status?: string | null, isFinal?: boolean | null, isArchived?: boolean | null, createdAt?: any | null, dimension?: { __typename?: 'WarehouseDimension', centralHeight?: number | null, wallHeight?: number | null, carpetLength?: number | null, carpetBreadth?: number | null, carpetArea?: number | null, buildUpLength?: number | null, buildUpBreadth?: number | null, buildUpArea?: number | null } | null, specifications?: { __typename?: 'WarehouseSpecification', shedType?: string | null, floorType?: string | null } | null, address?: { __typename?: 'WarehouseAddress', locality?: string | null, city?: string | null, pincode?: string | null } | null, type?: { __typename?: 'WarehouseType', id?: string | null, code?: string | null, name?: string | null } | null, organization?: { __typename?: 'Organization', uid?: any | null, code?: string | null, name?: string | null } | null } };

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
  orgUID?: InputMaybe<Scalars['UUID']>;
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
}
    `;
export const AuthPayloadFragmentFragmentDoc = gql`
    fragment AuthPayloadFragment on AuthPayload {
  tokenString
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
export const PalletTypeFragmentFragmentDoc = gql`
    fragment PalletTypeFragment on PalletType {
  id
  code
  name
  length
  breadth
  weightCapacity
  weightUnit
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
  name
  details
  dimension {
    centralHeight
    wallHeight
    carpetLength
    carpetBreadth
    carpetArea
    buildUpLength
    buildUpBreadth
    buildUpArea
  }
  specifications {
    shedType
    floorType
  }
  address {
    locality
    city
    pincode
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
export const PalletFragmentFragmentDoc = gql`
    fragment PalletFragment on Pallet {
  id
  uid
  code
  status
  isAllocated
  isOccupied
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
export const ThirdPartyWarehouseFragmentFragmentDoc = gql`
    fragment ThirdPartyWarehouseFragment on ThirdPartyWarehouse {
  id
  code
  name
  details
  dimension {
    centralHeight
    wallHeight
    carpetLength
    carpetBreadth
    carpetArea
    buildUpLength
    buildUpBreadth
    buildUpArea
  }
  specifications {
    shedType
    floorType
  }
  address {
    locality
    city
    pincode
  }
  status
  isFinal
  isArchived
  createdAt
  warehouse {
    uid
    code
    name
  }
  contract {
    uid
    code
  }
  organization {
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
    ...AuthPayloadFragment
  }
}
    ${AuthPayloadFragmentFragmentDoc}`;
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
    query BatchCatalogues($searchFilter: SearchFilter!) {
  batchCatalogues(search: $searchFilter) {
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
    query Contacts($searchFilter: SearchFilter!, $orgUID: UUID) {
  contacts(search: $searchFilter, orgUID: $orgUID) {
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
 *      orgUID: // value for 'orgUID'
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
    query Departments($searchFilter: SearchFilter!, $orgUID: UUID) {
  departments(search: $searchFilter, orgUID: $orgUID) {
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
 *      orgUID: // value for 'orgUID'
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
    query Organizations($searchFilter: SearchFilter!) {
  organizations(search: $searchFilter) {
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
    query Roles($searchFilter: SearchFilter!, $orgUID: UUID, $deptID: ID) {
  roles(search: $searchFilter, orgUID: $orgUID, deptID: $deptID) {
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
 *      orgUID: // value for 'orgUID'
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
    query Users($searchFilter: SearchFilter!, $orgUID: UUID, $roleID: ID) {
  users(search: $searchFilter, orgUID: $orgUID, roleID: $roleID) {
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
 *      orgUID: // value for 'orgUID'
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
    query User($id: ID, $email: String, $phone: String) {
  user(id: $id, email: $email, phone: $phone) {
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
 *      email: // value for 'email'
 *      phone: // value for 'phone'
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
export const CellsDocument = gql`
    query Cells($searchFilter: SearchFilter!) {
  cells(search: $searchFilter) {
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
    query Pallet($uid: UUID, $code: String) {
  pallet(uid: $uid, code: $code) {
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
export const PalletCreateDocument = gql`
    mutation PalletCreate($input: UpdatePallet!) {
  palletCreate(input: $input) {
    ...PalletFragment
  }
}
    ${PalletFragmentFragmentDoc}`;
export type PalletCreateMutationFn = Apollo.MutationFunction<PalletCreateMutation, PalletCreateMutationVariables>;

/**
 * __usePalletCreateMutation__
 *
 * To run a mutation, you first call `usePalletCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePalletCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [palletCreateMutation, { data, loading, error }] = usePalletCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePalletCreateMutation(baseOptions?: Apollo.MutationHookOptions<PalletCreateMutation, PalletCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PalletCreateMutation, PalletCreateMutationVariables>(PalletCreateDocument, options);
      }
export type PalletCreateMutationHookResult = ReturnType<typeof usePalletCreateMutation>;
export type PalletCreateMutationResult = Apollo.MutationResult<PalletCreateMutation>;
export type PalletCreateMutationOptions = Apollo.BaseMutationOptions<PalletCreateMutation, PalletCreateMutationVariables>;
export const PalletUpdateDocument = gql`
    mutation PalletUpdate($uid: UUID!, $input: UpdatePallet!) {
  palletUpdate(uid: $uid, input: $input) {
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
 *      uid: // value for 'uid'
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
export const PalletFinalizeDocument = gql`
    mutation PalletFinalize($uid: UUID!) {
  palletFinalize(uid: $uid) {
    ...PalletFragment
  }
}
    ${PalletFragmentFragmentDoc}`;
export type PalletFinalizeMutationFn = Apollo.MutationFunction<PalletFinalizeMutation, PalletFinalizeMutationVariables>;

/**
 * __usePalletFinalizeMutation__
 *
 * To run a mutation, you first call `usePalletFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePalletFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [palletFinalizeMutation, { data, loading, error }] = usePalletFinalizeMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function usePalletFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<PalletFinalizeMutation, PalletFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PalletFinalizeMutation, PalletFinalizeMutationVariables>(PalletFinalizeDocument, options);
      }
export type PalletFinalizeMutationHookResult = ReturnType<typeof usePalletFinalizeMutation>;
export type PalletFinalizeMutationResult = Apollo.MutationResult<PalletFinalizeMutation>;
export type PalletFinalizeMutationOptions = Apollo.BaseMutationOptions<PalletFinalizeMutation, PalletFinalizeMutationVariables>;
export const PalletArchiveDocument = gql`
    mutation PalletArchive($uid: UUID!) {
  palletArchive(uid: $uid) {
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
 *      uid: // value for 'uid'
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
    mutation PalletUnarchive($uid: UUID!) {
  palletUnarchive(uid: $uid) {
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
 *      uid: // value for 'uid'
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
export const PalletTypesDocument = gql`
    query PalletTypes($searchFilter: SearchFilter!) {
  palletTypes(search: $searchFilter) {
    palletTypes {
      ...PalletTypeFragment
    }
    total
  }
}
    ${PalletTypeFragmentFragmentDoc}`;

/**
 * __usePalletTypesQuery__
 *
 * To run a query within a React component, call `usePalletTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePalletTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePalletTypesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function usePalletTypesQuery(baseOptions: Apollo.QueryHookOptions<PalletTypesQuery, PalletTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PalletTypesQuery, PalletTypesQueryVariables>(PalletTypesDocument, options);
      }
export function usePalletTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PalletTypesQuery, PalletTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PalletTypesQuery, PalletTypesQueryVariables>(PalletTypesDocument, options);
        }
export type PalletTypesQueryHookResult = ReturnType<typeof usePalletTypesQuery>;
export type PalletTypesLazyQueryHookResult = ReturnType<typeof usePalletTypesLazyQuery>;
export type PalletTypesQueryResult = Apollo.QueryResult<PalletTypesQuery, PalletTypesQueryVariables>;
export const PalletTypeDocument = gql`
    query PalletType($id: ID, $code: String) {
  palletType(id: $id, code: $code) {
    ...PalletTypeFragment
  }
}
    ${PalletTypeFragmentFragmentDoc}`;

/**
 * __usePalletTypeQuery__
 *
 * To run a query within a React component, call `usePalletTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePalletTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePalletTypeQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function usePalletTypeQuery(baseOptions?: Apollo.QueryHookOptions<PalletTypeQuery, PalletTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PalletTypeQuery, PalletTypeQueryVariables>(PalletTypeDocument, options);
      }
export function usePalletTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PalletTypeQuery, PalletTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PalletTypeQuery, PalletTypeQueryVariables>(PalletTypeDocument, options);
        }
export type PalletTypeQueryHookResult = ReturnType<typeof usePalletTypeQuery>;
export type PalletTypeLazyQueryHookResult = ReturnType<typeof usePalletTypeLazyQuery>;
export type PalletTypeQueryResult = Apollo.QueryResult<PalletTypeQuery, PalletTypeQueryVariables>;
export const PalletTypeCreateDocument = gql`
    mutation PalletTypeCreate($input: UpdatePalletType!) {
  palletTypeCreate(input: $input) {
    ...PalletTypeFragment
  }
}
    ${PalletTypeFragmentFragmentDoc}`;
export type PalletTypeCreateMutationFn = Apollo.MutationFunction<PalletTypeCreateMutation, PalletTypeCreateMutationVariables>;

/**
 * __usePalletTypeCreateMutation__
 *
 * To run a mutation, you first call `usePalletTypeCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePalletTypeCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [palletTypeCreateMutation, { data, loading, error }] = usePalletTypeCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePalletTypeCreateMutation(baseOptions?: Apollo.MutationHookOptions<PalletTypeCreateMutation, PalletTypeCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PalletTypeCreateMutation, PalletTypeCreateMutationVariables>(PalletTypeCreateDocument, options);
      }
export type PalletTypeCreateMutationHookResult = ReturnType<typeof usePalletTypeCreateMutation>;
export type PalletTypeCreateMutationResult = Apollo.MutationResult<PalletTypeCreateMutation>;
export type PalletTypeCreateMutationOptions = Apollo.BaseMutationOptions<PalletTypeCreateMutation, PalletTypeCreateMutationVariables>;
export const PalletTypeUpdateDocument = gql`
    mutation PalletTypeUpdate($id: ID!, $input: UpdatePalletType!) {
  palletTypeUpdate(id: $id, input: $input) {
    ...PalletTypeFragment
  }
}
    ${PalletTypeFragmentFragmentDoc}`;
export type PalletTypeUpdateMutationFn = Apollo.MutationFunction<PalletTypeUpdateMutation, PalletTypeUpdateMutationVariables>;

/**
 * __usePalletTypeUpdateMutation__
 *
 * To run a mutation, you first call `usePalletTypeUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePalletTypeUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [palletTypeUpdateMutation, { data, loading, error }] = usePalletTypeUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePalletTypeUpdateMutation(baseOptions?: Apollo.MutationHookOptions<PalletTypeUpdateMutation, PalletTypeUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PalletTypeUpdateMutation, PalletTypeUpdateMutationVariables>(PalletTypeUpdateDocument, options);
      }
export type PalletTypeUpdateMutationHookResult = ReturnType<typeof usePalletTypeUpdateMutation>;
export type PalletTypeUpdateMutationResult = Apollo.MutationResult<PalletTypeUpdateMutation>;
export type PalletTypeUpdateMutationOptions = Apollo.BaseMutationOptions<PalletTypeUpdateMutation, PalletTypeUpdateMutationVariables>;
export const PalletTypeFinalizeDocument = gql`
    mutation PalletTypeFinalize($id: ID!) {
  palletTypeFinalize(id: $id) {
    ...PalletTypeFragment
  }
}
    ${PalletTypeFragmentFragmentDoc}`;
export type PalletTypeFinalizeMutationFn = Apollo.MutationFunction<PalletTypeFinalizeMutation, PalletTypeFinalizeMutationVariables>;

/**
 * __usePalletTypeFinalizeMutation__
 *
 * To run a mutation, you first call `usePalletTypeFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePalletTypeFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [palletTypeFinalizeMutation, { data, loading, error }] = usePalletTypeFinalizeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePalletTypeFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<PalletTypeFinalizeMutation, PalletTypeFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PalletTypeFinalizeMutation, PalletTypeFinalizeMutationVariables>(PalletTypeFinalizeDocument, options);
      }
export type PalletTypeFinalizeMutationHookResult = ReturnType<typeof usePalletTypeFinalizeMutation>;
export type PalletTypeFinalizeMutationResult = Apollo.MutationResult<PalletTypeFinalizeMutation>;
export type PalletTypeFinalizeMutationOptions = Apollo.BaseMutationOptions<PalletTypeFinalizeMutation, PalletTypeFinalizeMutationVariables>;
export const PalletTypeArchiveDocument = gql`
    mutation PalletTypeArchive($id: ID!) {
  palletTypeArchive(id: $id) {
    ...PalletTypeFragment
  }
}
    ${PalletTypeFragmentFragmentDoc}`;
export type PalletTypeArchiveMutationFn = Apollo.MutationFunction<PalletTypeArchiveMutation, PalletTypeArchiveMutationVariables>;

/**
 * __usePalletTypeArchiveMutation__
 *
 * To run a mutation, you first call `usePalletTypeArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePalletTypeArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [palletTypeArchiveMutation, { data, loading, error }] = usePalletTypeArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePalletTypeArchiveMutation(baseOptions?: Apollo.MutationHookOptions<PalletTypeArchiveMutation, PalletTypeArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PalletTypeArchiveMutation, PalletTypeArchiveMutationVariables>(PalletTypeArchiveDocument, options);
      }
export type PalletTypeArchiveMutationHookResult = ReturnType<typeof usePalletTypeArchiveMutation>;
export type PalletTypeArchiveMutationResult = Apollo.MutationResult<PalletTypeArchiveMutation>;
export type PalletTypeArchiveMutationOptions = Apollo.BaseMutationOptions<PalletTypeArchiveMutation, PalletTypeArchiveMutationVariables>;
export const PalletTypeUnarchiveDocument = gql`
    mutation PalletTypeUnarchive($id: ID!) {
  palletTypeUnarchive(id: $id) {
    ...PalletTypeFragment
  }
}
    ${PalletTypeFragmentFragmentDoc}`;
export type PalletTypeUnarchiveMutationFn = Apollo.MutationFunction<PalletTypeUnarchiveMutation, PalletTypeUnarchiveMutationVariables>;

/**
 * __usePalletTypeUnarchiveMutation__
 *
 * To run a mutation, you first call `usePalletTypeUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePalletTypeUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [palletTypeUnarchiveMutation, { data, loading, error }] = usePalletTypeUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePalletTypeUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<PalletTypeUnarchiveMutation, PalletTypeUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PalletTypeUnarchiveMutation, PalletTypeUnarchiveMutationVariables>(PalletTypeUnarchiveDocument, options);
      }
export type PalletTypeUnarchiveMutationHookResult = ReturnType<typeof usePalletTypeUnarchiveMutation>;
export type PalletTypeUnarchiveMutationResult = Apollo.MutationResult<PalletTypeUnarchiveMutation>;
export type PalletTypeUnarchiveMutationOptions = Apollo.BaseMutationOptions<PalletTypeUnarchiveMutation, PalletTypeUnarchiveMutationVariables>;
export const RacksDocument = gql`
    query Racks($searchFilter: SearchFilter!) {
  racks(search: $searchFilter) {
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
export const ThirdPartyWarehousesDocument = gql`
    query ThirdPartyWarehouses($searchFilter: SearchFilter!) {
  thirdPartyWarehouses(search: $searchFilter) {
    thirdPartyWarehouses {
      ...ThirdPartyWarehouseFragment
    }
    total
  }
}
    ${ThirdPartyWarehouseFragmentFragmentDoc}`;

/**
 * __useThirdPartyWarehousesQuery__
 *
 * To run a query within a React component, call `useThirdPartyWarehousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useThirdPartyWarehousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThirdPartyWarehousesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *   },
 * });
 */
export function useThirdPartyWarehousesQuery(baseOptions: Apollo.QueryHookOptions<ThirdPartyWarehousesQuery, ThirdPartyWarehousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ThirdPartyWarehousesQuery, ThirdPartyWarehousesQueryVariables>(ThirdPartyWarehousesDocument, options);
      }
export function useThirdPartyWarehousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ThirdPartyWarehousesQuery, ThirdPartyWarehousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ThirdPartyWarehousesQuery, ThirdPartyWarehousesQueryVariables>(ThirdPartyWarehousesDocument, options);
        }
export type ThirdPartyWarehousesQueryHookResult = ReturnType<typeof useThirdPartyWarehousesQuery>;
export type ThirdPartyWarehousesLazyQueryHookResult = ReturnType<typeof useThirdPartyWarehousesLazyQuery>;
export type ThirdPartyWarehousesQueryResult = Apollo.QueryResult<ThirdPartyWarehousesQuery, ThirdPartyWarehousesQueryVariables>;
export const ThirdPartyWarehouseDocument = gql`
    query ThirdPartyWarehouse($id: ID, $code: String) {
  thirdPartyWarehouse(id: $id, code: $code) {
    ...ThirdPartyWarehouseFragment
  }
}
    ${ThirdPartyWarehouseFragmentFragmentDoc}`;

/**
 * __useThirdPartyWarehouseQuery__
 *
 * To run a query within a React component, call `useThirdPartyWarehouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useThirdPartyWarehouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThirdPartyWarehouseQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useThirdPartyWarehouseQuery(baseOptions?: Apollo.QueryHookOptions<ThirdPartyWarehouseQuery, ThirdPartyWarehouseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ThirdPartyWarehouseQuery, ThirdPartyWarehouseQueryVariables>(ThirdPartyWarehouseDocument, options);
      }
export function useThirdPartyWarehouseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ThirdPartyWarehouseQuery, ThirdPartyWarehouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ThirdPartyWarehouseQuery, ThirdPartyWarehouseQueryVariables>(ThirdPartyWarehouseDocument, options);
        }
export type ThirdPartyWarehouseQueryHookResult = ReturnType<typeof useThirdPartyWarehouseQuery>;
export type ThirdPartyWarehouseLazyQueryHookResult = ReturnType<typeof useThirdPartyWarehouseLazyQuery>;
export type ThirdPartyWarehouseQueryResult = Apollo.QueryResult<ThirdPartyWarehouseQuery, ThirdPartyWarehouseQueryVariables>;
export const ThirdPartyWarehouseCreateDocument = gql`
    mutation ThirdPartyWarehouseCreate($input: UpdateThirdPartyWarehouse!) {
  thirdPartyWarehouseCreate(input: $input) {
    ...ThirdPartyWarehouseFragment
  }
}
    ${ThirdPartyWarehouseFragmentFragmentDoc}`;
export type ThirdPartyWarehouseCreateMutationFn = Apollo.MutationFunction<ThirdPartyWarehouseCreateMutation, ThirdPartyWarehouseCreateMutationVariables>;

/**
 * __useThirdPartyWarehouseCreateMutation__
 *
 * To run a mutation, you first call `useThirdPartyWarehouseCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThirdPartyWarehouseCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [thirdPartyWarehouseCreateMutation, { data, loading, error }] = useThirdPartyWarehouseCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useThirdPartyWarehouseCreateMutation(baseOptions?: Apollo.MutationHookOptions<ThirdPartyWarehouseCreateMutation, ThirdPartyWarehouseCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThirdPartyWarehouseCreateMutation, ThirdPartyWarehouseCreateMutationVariables>(ThirdPartyWarehouseCreateDocument, options);
      }
export type ThirdPartyWarehouseCreateMutationHookResult = ReturnType<typeof useThirdPartyWarehouseCreateMutation>;
export type ThirdPartyWarehouseCreateMutationResult = Apollo.MutationResult<ThirdPartyWarehouseCreateMutation>;
export type ThirdPartyWarehouseCreateMutationOptions = Apollo.BaseMutationOptions<ThirdPartyWarehouseCreateMutation, ThirdPartyWarehouseCreateMutationVariables>;
export const ThirdPartyWarehouseUpdateDocument = gql`
    mutation ThirdPartyWarehouseUpdate($id: ID!, $input: UpdateThirdPartyWarehouse!) {
  thirdPartyWarehouseUpdate(id: $id, input: $input) {
    ...ThirdPartyWarehouseFragment
  }
}
    ${ThirdPartyWarehouseFragmentFragmentDoc}`;
export type ThirdPartyWarehouseUpdateMutationFn = Apollo.MutationFunction<ThirdPartyWarehouseUpdateMutation, ThirdPartyWarehouseUpdateMutationVariables>;

/**
 * __useThirdPartyWarehouseUpdateMutation__
 *
 * To run a mutation, you first call `useThirdPartyWarehouseUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThirdPartyWarehouseUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [thirdPartyWarehouseUpdateMutation, { data, loading, error }] = useThirdPartyWarehouseUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useThirdPartyWarehouseUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ThirdPartyWarehouseUpdateMutation, ThirdPartyWarehouseUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThirdPartyWarehouseUpdateMutation, ThirdPartyWarehouseUpdateMutationVariables>(ThirdPartyWarehouseUpdateDocument, options);
      }
export type ThirdPartyWarehouseUpdateMutationHookResult = ReturnType<typeof useThirdPartyWarehouseUpdateMutation>;
export type ThirdPartyWarehouseUpdateMutationResult = Apollo.MutationResult<ThirdPartyWarehouseUpdateMutation>;
export type ThirdPartyWarehouseUpdateMutationOptions = Apollo.BaseMutationOptions<ThirdPartyWarehouseUpdateMutation, ThirdPartyWarehouseUpdateMutationVariables>;
export const ThirdPartyWarehouseFinalizeDocument = gql`
    mutation ThirdPartyWarehouseFinalize($id: ID!) {
  thirdPartyWarehouseFinalize(id: $id) {
    ...ThirdPartyWarehouseFragment
  }
}
    ${ThirdPartyWarehouseFragmentFragmentDoc}`;
export type ThirdPartyWarehouseFinalizeMutationFn = Apollo.MutationFunction<ThirdPartyWarehouseFinalizeMutation, ThirdPartyWarehouseFinalizeMutationVariables>;

/**
 * __useThirdPartyWarehouseFinalizeMutation__
 *
 * To run a mutation, you first call `useThirdPartyWarehouseFinalizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThirdPartyWarehouseFinalizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [thirdPartyWarehouseFinalizeMutation, { data, loading, error }] = useThirdPartyWarehouseFinalizeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useThirdPartyWarehouseFinalizeMutation(baseOptions?: Apollo.MutationHookOptions<ThirdPartyWarehouseFinalizeMutation, ThirdPartyWarehouseFinalizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThirdPartyWarehouseFinalizeMutation, ThirdPartyWarehouseFinalizeMutationVariables>(ThirdPartyWarehouseFinalizeDocument, options);
      }
export type ThirdPartyWarehouseFinalizeMutationHookResult = ReturnType<typeof useThirdPartyWarehouseFinalizeMutation>;
export type ThirdPartyWarehouseFinalizeMutationResult = Apollo.MutationResult<ThirdPartyWarehouseFinalizeMutation>;
export type ThirdPartyWarehouseFinalizeMutationOptions = Apollo.BaseMutationOptions<ThirdPartyWarehouseFinalizeMutation, ThirdPartyWarehouseFinalizeMutationVariables>;
export const ThirdPartyWarehouseArchiveDocument = gql`
    mutation ThirdPartyWarehouseArchive($id: ID!) {
  thirdPartyWarehouseArchive(id: $id) {
    ...ThirdPartyWarehouseFragment
  }
}
    ${ThirdPartyWarehouseFragmentFragmentDoc}`;
export type ThirdPartyWarehouseArchiveMutationFn = Apollo.MutationFunction<ThirdPartyWarehouseArchiveMutation, ThirdPartyWarehouseArchiveMutationVariables>;

/**
 * __useThirdPartyWarehouseArchiveMutation__
 *
 * To run a mutation, you first call `useThirdPartyWarehouseArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThirdPartyWarehouseArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [thirdPartyWarehouseArchiveMutation, { data, loading, error }] = useThirdPartyWarehouseArchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useThirdPartyWarehouseArchiveMutation(baseOptions?: Apollo.MutationHookOptions<ThirdPartyWarehouseArchiveMutation, ThirdPartyWarehouseArchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThirdPartyWarehouseArchiveMutation, ThirdPartyWarehouseArchiveMutationVariables>(ThirdPartyWarehouseArchiveDocument, options);
      }
export type ThirdPartyWarehouseArchiveMutationHookResult = ReturnType<typeof useThirdPartyWarehouseArchiveMutation>;
export type ThirdPartyWarehouseArchiveMutationResult = Apollo.MutationResult<ThirdPartyWarehouseArchiveMutation>;
export type ThirdPartyWarehouseArchiveMutationOptions = Apollo.BaseMutationOptions<ThirdPartyWarehouseArchiveMutation, ThirdPartyWarehouseArchiveMutationVariables>;
export const ThirdPartyWarehouseUnarchiveDocument = gql`
    mutation ThirdPartyWarehouseUnarchive($id: ID!) {
  thirdPartyWarehouseUnarchive(id: $id) {
    ...ThirdPartyWarehouseFragment
  }
}
    ${ThirdPartyWarehouseFragmentFragmentDoc}`;
export type ThirdPartyWarehouseUnarchiveMutationFn = Apollo.MutationFunction<ThirdPartyWarehouseUnarchiveMutation, ThirdPartyWarehouseUnarchiveMutationVariables>;

/**
 * __useThirdPartyWarehouseUnarchiveMutation__
 *
 * To run a mutation, you first call `useThirdPartyWarehouseUnarchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThirdPartyWarehouseUnarchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [thirdPartyWarehouseUnarchiveMutation, { data, loading, error }] = useThirdPartyWarehouseUnarchiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useThirdPartyWarehouseUnarchiveMutation(baseOptions?: Apollo.MutationHookOptions<ThirdPartyWarehouseUnarchiveMutation, ThirdPartyWarehouseUnarchiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThirdPartyWarehouseUnarchiveMutation, ThirdPartyWarehouseUnarchiveMutationVariables>(ThirdPartyWarehouseUnarchiveDocument, options);
      }
export type ThirdPartyWarehouseUnarchiveMutationHookResult = ReturnType<typeof useThirdPartyWarehouseUnarchiveMutation>;
export type ThirdPartyWarehouseUnarchiveMutationResult = Apollo.MutationResult<ThirdPartyWarehouseUnarchiveMutation>;
export type ThirdPartyWarehouseUnarchiveMutationOptions = Apollo.BaseMutationOptions<ThirdPartyWarehouseUnarchiveMutation, ThirdPartyWarehouseUnarchiveMutationVariables>;
export const WarehousesDocument = gql`
    query Warehouses($searchFilter: SearchFilter!, $orgUID: UUID) {
  warehouses(search: $searchFilter, orgUID: $orgUID) {
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
 *      orgUID: // value for 'orgUID'
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
    query WarehouseTypes($searchFilter: SearchFilter!, $orgUID: UUID) {
  warehouseTypes(search: $searchFilter, orgUID: $orgUID) {
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
 *      orgUID: // value for 'orgUID'
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