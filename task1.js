function downloadData(url, callback) {
    console.log(`Starting download from ${url}...`);
    setTimeout(() => {
      const data = "Sample data from " + url;
      console.log("Download completed.");
      callback(null, data);
    }, 1000);
  }
  

  function writeToFile(data, callback) {
    console.log("Writing data to file...");
    setTimeout(() => {
      const filename = "file.txt";
      console.log(`Data written to ${filename}.`);
      callback(null, filename);
    }, 1000);
  }
  

  function uploadFile(filename, targetUrl, callback) {
    console.log(`Uploading ${filename} to ${targetUrl}...`);
    setTimeout(() => {
      console.log("Upload completed.");
      callback(null, `Upload successful to ${targetUrl}`);
    }, 1000);
  }
  
  // Chaining with callbacks
  downloadData("https://amazon.com", (err, data) => {
    if (err) return console.error("Download error:", err);
    writeToFile(data, (err, filename) => {
      if (err) return console.error("File write error:", err);
      uploadFile(filename, "https://amazon.com", (err, message) => {
        if (err) return console.error("Amazon error:", err);
        console.log(message);
      });
    });
  });