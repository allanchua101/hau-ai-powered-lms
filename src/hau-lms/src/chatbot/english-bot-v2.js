import Classifier from "ml-classify-text";
import { intents } from "./en-intents.json";
const clf = new Classifier();
const DEFAULT_RESPONSE =
  "Sorry, my authors told me to not answer that question. Please focus on topics related to AI and Innovation";

intents.forEach((item) => {
  clf.train(item.queries, item.intent);
});

function cleanseInput(str) {
  let temp = str.replace(/[^a-zA-Z0-9]/g, "");

  return temp.trim().toLowerCase();
}

export function getResponse(msg) {
  let cleansed = cleanseInput(msg);
  let res = clf.predict(cleansed);

  if (res.length === 0) {
    return DEFAULT_RESPONSE;
  }

  console.log(JSON.stringify(res));

  if (res[0].confidence <= 0.4) {
    return DEFAULT_RESPONSE;
  }

  let reply = intents.find((r) => r.intent === res[0].label);

  if (reply) {
    return reply.responses[Math.floor(Math.random() * reply.responses.length)];
  }

  return DEFAULT_RESPONSE;
}
