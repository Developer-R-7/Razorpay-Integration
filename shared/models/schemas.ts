import { object, string, TypeOf ,array,number} from "yup";

export const OrderSchema = object({
    amount: number().required(),
    currency: string().required()
  });
  
export type orderQuery = TypeOf<typeof OrderSchema>;

export interface orderItemsSchema {
  id: string;
  amount: number;
  attempts: number;
  currency: string;
  created_at: number;
}
