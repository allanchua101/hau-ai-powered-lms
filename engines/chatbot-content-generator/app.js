const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// File path.
readXlsxFile("../../content/Chatbot Intents.xlsx").then((rows) => {
  let messageSets = rows
    .map((row) => {
      return {
        intent: row[0],
        query: row[1],
        reply: row[2],
      };
    })
    .filter((row) => {
      return row.intent !== "intent";
    });
  let intents = messageSets.reduce((agg, item) => {
    let queries = item.query
      .trim()
      .split(";")
      .filter((q) => q.trim() !== "")
      .map((q) => capitalize(q.trim()));
    let responses = item.reply
      .trim()
      .split(";")
      .filter((q) => q.trim() !== "")
      .map((q) => capitalize(q.trim()));

    agg.push({
      intent: item.intent,
      queries,
      responses,
    });

    return agg;
  }, []);

  let intentsJSON = JSON.stringify({ intents });

  fs.writeFileSync(
    "../../src/hau-lms/src/chatbot/en-intents.json",
    intentsJSON,
    "utf-8",
    intentsJSON
  );
});
