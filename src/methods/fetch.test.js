const comic = {
  date: "31/12/2012",
  issue: 1154,
  title: "Resolution",
  img: "https://imgs.xkcd.com/comics/resolution.png",
  transcript: `Man: I'm scared of being stuck thinking I'm fixing things about myself but never actually changing. Man: My 2013 resolution is to break out of loops. To recognize when I'm not making progress stop yelling at myself and try a different approach. Off screen character: Wasn't that also your resolution last year? The man shakes his fist. Man: Yeah but this year's gonna be different. Title text: If at first you don't succeed that's one data point.`
};

test("getCurrentStrip()", () => {
  return request().then(data => {
    expect(typeof data).toBe("object");

    expect(Object.keys(data)).toEqual([
      "date",
      "issue",
      "title",
      "img",
      "transcript"
    ]);

    expect(typeof data.date).toBe("string");
    expect(typeof data.issue).toBe("number");
    expect(typeof data.title).toBe("string");
    expect(typeof data.img).toBe("string");
    expect(typeof data.transcript).toBe("string");
  });
});

const request = () => {
  return new Promise((resolve, reject) => {
    comic
      ? resolve(comic)
      : reject({
          error: "ERROR"
        });
  });
};
