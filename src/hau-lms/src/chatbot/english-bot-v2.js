import Classifier from "ml-classify-text";
const clf = new Classifier();
const replies = [
  {
    key: "greetings.hi",
    responses: ["Hi, how can I help you?", "OK kumu pare, nananu ka keni?"],
  },
  {
    key: "greetings.morning",
    responses: [
      "Good morning, how can I help you?",
      "Good morning, how may I help you?",
      "Good morning, how may I help?",
    ],
  },
];
let hiData = ["hi", "hello"];
let goodMorning = ["good morning"];
let goodEvening = ["good evening"];
let goodAfternoon = ["good afternoon"];

clf.train(hiData, "greetings.hi");
clf.train(goodMorning, "greetings.morning");
clf.train(goodEvening, "greetings.evening");
clf.train(goodAfternoon, "greetings.afternoon");

export function getResponse(msg) {
  let res = clf.predict(msg);

  if (res.length === 0) {
    return "Sorry, I cannot understand you...";
  }

  let reply = replies.find((r) => r.key === res[0].label);

  if (reply) {
    return reply.responses[Math.floor(Math.random() * reply.responses.length)];
  }

  return "Sorry, I cannot understand you...";
}
