import Classifier from "ml-classify-text";
import { intents } from "./en-intents.json";
const clf = new Classifier();

intents.forEach((item) => {
  clf.train(item.queries, item.intent);
});

export function getResponse(msg) {
  let res = clf.predict(msg);

  if (res.length === 0) {
    return "Sorry, I cannot understand you...";
  }

  let reply = intents.find((r) => r.intent === res[0].label);

  if (reply) {
    return reply.responses[Math.floor(Math.random() * reply.responses.length)];
  }

  return "Sorry, I cannot understand you...";
}
