function formatYmd (date) {
  return date.toISOString().slice(0, 10);
}

function mapActivity(activity){
  const {
    img: entryImg,
    name: entryTitle,
    include,
    rate_adult: price,
    rate_child: price2
  } = activity;
  let access = include.split(".")
  access = access.filter(acc=> acc!="")
  return {
    entryImg,
    entryTitle,
    access,
    price,
    price2
  }
}
function formatTourDetails(tourDetail){
  const { activity_info, activity_type, multimedia } = tourDetail;
  const { 
    name: tourTitle ="",
    description: tourDescription
  } = activity_info;
  const entries = activity_type.map(activity => mapActivity(activity))

  const images = multimedia.filter(media => media.type == "image");
  const gallery = images.map(image=> image.url)
  const videos = multimedia.filter(media => media.type == "video");
  let tourVideo = videos[0].url;

  return {
    tourTitle,
    tourDescription,
    entries,
    gallery,
    tourVideo
  }
}

export {
  formatYmd,
  formatTourDetails
}