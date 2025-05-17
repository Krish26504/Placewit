async function processFlow() {
    try {
      console.log("Process started...");
      const data = await downloadData("https://example.com");
      const filename = await writeToFile(data);
      const message = await uploadFile(filename, "https://upload.com");
      console.log(message);
      console.log("Process finished.");
    } catch (err) {
      console.error("Error in async flow:", err);
    }
  }
  
  processFlow();