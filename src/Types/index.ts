// ShardInfo Types
export interface ShardInfoConstructorParams {
  id: string | number;
  index: number;
  total: number;
  phoneNumber?: string | null;
  status?: string;
}

export interface ShardInfoUpdateFields {
  id?: string | number;
  index?: number;
  total?: number;
  phoneNumber?: string | null;
  status?: string;
}

// ShardManager Types
export interface ShardOptions {
  id?: string;
  phoneNumber?: string;
  socket?: any;
}

export interface ShardConfig {
  session?: string;
}

export interface ConnectionUpdate {
  connection?: string;
  lastDisconnect?: {
    error?: {
      output?: {
        statusCode?: number;
      };
    };
  };
  qr?: string;
}