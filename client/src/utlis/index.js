import moment from "moment";

export const postTimeFormating = (posttime) =>{
    let date = new Date();
    var dts = new Date(posttime.date);
    var split_Values = dts.toLocaleString().split(" ");
    var dates = split_Values[0];
    var times = split_Values[1];
    var then = dates + times;
    var ms = moment
      .utc(
        moment(date, "DD/MM/YYYY HH:mm:ss").diff(
          moment(then, "DD/MM/YYYY HH:mm:ss")
        )
      )
      .format("HH:mm:ss");
    var d = moment.duration(ms);
    return d.humanize();;
}