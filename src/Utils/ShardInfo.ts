import { ShardInfoConstructorParams, ShardInfoUpdateFields } from "../Types/index";

export default class ShardInfo {
  public id: string | number;
  public index: number;
  public total: number;
  public phoneNumber: string | null;
  public status: string;
  public updatedAt: Date;

  constructor({ 
    id, 
    index, 
    total, 
    phoneNumber = null, 
    status = "initializing" 
  }: ShardInfoConstructorParams) {
    this.id = id;
    this.index = index;
    this.total = total;
    this.phoneNumber = phoneNumber;
    this.status = status;
    this.updatedAt = new Date();
  }

  update(fields: ShardInfoUpdateFields = {}): void {
    Object.assign(this, fields);
    this.updatedAt = new Date();
  }
}
