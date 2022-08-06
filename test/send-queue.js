const { ServiceBusClient } = require("@azure/service-bus");

const sendQueue = async () => {
  const queueConnectionString =
    "Endpoint=sb://cardoro-service-bus.servicebus.windows.net/;SharedAccessKeyName=cardoro-service-bus-policy;SharedAccessKey=WIiH1YvTEOV4coaI3y9GnaB0FGhfH2Eh0zEmaKKJf1E=;EntityPath=email-sending";

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
