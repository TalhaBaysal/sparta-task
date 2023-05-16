import { IAddressModel } from ".";

export default interface IAddress {
  count: number;
  models: IAddressModel[];
  page: number;
  pageCount: number;
  totalCount: number;
}
