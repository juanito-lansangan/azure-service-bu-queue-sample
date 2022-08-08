const { ServiceBusClient } = require("@azure/service-bus");
require("dotenv").config();

const sendQueue = async () => {
  const queueConnectionString = process.env.QUEUE_CONNECTION_STRING;

  const serviceBus = new ServiceBusClient(queueConnectionString);

  const sender = serviceBus.createSender("email-sending");

  // await sender.sendMessages({
  //   data: JSON.stringify({ name: "Juan", age: "34", other: "none" }),
  // });
  await sender.sendMessages({
    body: {
      name: "Chris Uclaray",
      email: "xpenguin@mail.com",
      message: "Thank you for staying @cardoro, All is well!",
    },
  });

  console.log("success!");

  process.exit(0);
};

sendQueue();
