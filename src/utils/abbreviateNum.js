export default function abbreviateNumber(value) {
  let newValue = value;
  try {
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }

    if (suffixNum > 0) {
      newValue = newValue.toFixed(1);
    }

    newValue += suffixes[suffixNum];
    return newValue;
  } catch {
    console.log("error", newValue);
    return value;
  }
}
