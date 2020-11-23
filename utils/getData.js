export const getData = async (url, ctx) => {
  const cookie = ctx.req?.headers.cookie;

  const res = await fetch(url, {
    headers: {
      cookie: cookie,
    },
  });

  const data = await res.json();
  return data;
};
