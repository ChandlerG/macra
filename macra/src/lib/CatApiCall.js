
const catApiUrl = "http://thecatapi.com/api/images/get?format=xml&results_per_page=1";

export const catCall = async () => {
  return fetch(catApiUrl);
 }

 export const extractImg = (inXml) => {
    let re = /<url>(.+?)<\/url>/i;
    console.log(inXml);
    let imageTag = inXml.match(re);
    return imageTag;

    //TODO attach source url
 }

// <?xml version="1.0"?>
// <response>
//   <data>
//     <images>
//       <image>
//         <url>http://25.media.tumblr.com/qgIb8tERinfz6r8kPUR39UNVo1_400.gif</url>
//         <id>8eb</id>
//         <source_url>http://thecatapi.com/?id=8eb</source_url>
//       </image>
//     </images>
//   </data>
// </response>
