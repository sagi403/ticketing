import {
  Listener,
  OrderCanceledEvent,
  OrderStatus,
  Subjects,
} from "@slticketing/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";
import { queueGroupName } from "./queue-group-name";

export class OrderCanceledListener extends Listener<OrderCanceledEvent> {
  readonly subject = Subjects.OrderCanceled;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCanceledEvent["data"], msg: Message) {
    const order = await Order.findByEvent(data);

    if (!order) {
      throw new Error("Order not found");
    }

    order.set({ status: OrderStatus.Canceled });
    await order.save();

    msg.ack();
  }
}
