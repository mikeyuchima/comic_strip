export const getCurrentStrip = new Promise((res, rej) => {
  fetch("https://xkcd.com/info.0.json")
    .then(response => {
      return response.json();
    })
    .then(json => {
      res(parseData(json));
    })
    .catch(err => {
      rej(err);
    });
});

export const getNextStrip = issue =>
  new Promise((res, rej) => {
    fetch("https://xkcd.com/" + issue + "/info.0.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        res(parseData(json));
      })
      .catch(err => {
        rej(err);
      });
  });

const parseData = json => {
  return {
    date: `${json.day}/${json.month}/${json.year}`,
    issue: json.num,
    title: json.title,
    img: json.img,
    transcript: json.transcript.split(/[^a-zA-Z\d ?.:'!]/).join(" ")
  };
};
