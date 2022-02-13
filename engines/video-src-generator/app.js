const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

// File path.
readXlsxFile("../../content/Videos.xlsx").then((rows) => {
  let rawVideos = rows
    .map((row) => {
      return {
        author: row[0],
        courseTitle: row[1],
        videoTitle: row[2],
        link: row[3],
        description: row[4],
      };
    })
    .filter((vid) => {
      return vid.videoTitle !== null && vid.videoTitle !== "Video Title";
    });
  let courses = rawVideos.reduce((groups, vid) => {
    let index = groups.findIndex((g) => g.courseTitle === vid.courseTitle);

    if (index !== -1) {
      let videoCount = groups[index].videos.length;
      let newVid = {
        id: videoCount + 1,
        videoTitle: vid.videoTitle,
        link: vid.link,
        description: vid.description,
      };

      groups[index].videos.push(newVid);
    } else {
      groups.push({
        id: groups.length + 1,
        courseTitle: vid.courseTitle,
        author: vid.author,
        videos: [
          {
            id: 1,
            videoTitle: vid.videoTitle,
            link: vid.link,
            description: vid.description,
          },
        ],
      });
    }

    return groups;
  }, []);

  let coursesJSON = JSON.stringify({ courses });

  fs.writeFileSync(
    "../../src/hau-lms/src/store/courses.json",
    coursesJSON,
    "utf-8",
    coursesJSON
  );
});
