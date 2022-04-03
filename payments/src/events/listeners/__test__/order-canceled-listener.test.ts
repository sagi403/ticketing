import mongoose from "mongoose";
import { Message } from "node-nats-streaming";
import { OrderCanceledEvent, OrderStatus } from "@slticketing/common";
import { Order } from "../../../models/order";
import { natsWrapper } from "../../../nats-wrapper";
import { OrderCanceledListener } from "../order-canceled-listener";

const setup = async () => {
  const listener = new OrderCanceledListener(natsWrapper.client);

  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    status: OrderStatus.Created,
    price: 10,
    userId: "asdf",
    version: 0,
  });
  await order.save();

  const data: OrderCanceledEvent["data"] = {
    id: order.id,
    version: 1,
    ticket: {
      id: "gsdgh",
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, order, data, msg };
};

it("updates the status of the order", async () => {
  const { listener, order, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const updatedOrder = await Order.findById(order.id);

  expect(updatedOrder!.status).toEqual(OrderStatus.Canceled);
});

it("updates the status of the order", async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
