function downloadData(url) {
    console.log(`Starting download from ${url}...`);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "Sample data from " + url;
        console.log("Download completed.");
        resolve(data);
      }, 1000);
    });
  }
  
  function writeToFile(data) {
    console.log("Writing data to file...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const filename = "file.txt";
        console.log(`Data written to ${filename}.`);
        resolve(filename);
      }, 1000);
    });
  }
  
  function uploadFile(filename, targetUrl) {
    console.log(`Uploading ${filename} to ${targetUrl}...`);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Upload completed.");
        resolve(`Upload successful to ${targetUrl}`);
      }, 1000);
    });
  }
  
  downloadData("https://amazon.com")
    .then((data) => writeToFile(data))
    .then((filename) => uploadFile(filename, "https://amazon.com"))
    .then((message) => console.log(message))
    .catch((err) => console.error("Error:", err));