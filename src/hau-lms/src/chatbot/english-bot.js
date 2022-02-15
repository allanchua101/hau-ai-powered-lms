import natural from "natural";
const clf = new natural.BayesClassifier();
const replies = [
  {
    key: "greetings.hi",
    responses: ["Hi, how can I help you?", "OK kumu pare, nananu ka keni?"],
  },
];

clf.addDocument("hi", "greetings.hi");
clf.addDocument("hello", "greetings.hi");
clf.addDocument("good morning", "greetings.morning");
clf.addDocument("good evening", "greetings.evening");
clf.addDocument("good afternoon", "greetings.afternoon");

clf.train();

export function getResponse(msg) {
  let res = clf.classify(msg);
  let reply = replies.find((r) => r.key === res);

  if (reply) {
    return reply.responses[Math.floor(Math.random() * reply.responses.length)];
  }

  return "Sorry, I cannot understand you...";
}
