export async function loadUrlParam(paramName) {
  try {
    // Parse the current URL
    const urlParams = new URLSearchParams(window.location.search);
    const fileUrl = urlParams.get(paramName); // Get the file URL from query parameters

    // Check if the fileUrl parameter exists
    if (!fileUrl) {
      console.log('No file URL specified in query parameters.');
      return; // Exit if no file URL is provided
    }

    // Fetch the file content
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Throw an error if response is not ok
    }
    const text = await response.text(); // Read the response as text

    return text; // Return the text content of the file
  } catch (error) {
    console.error('Error fetching file:', error);
  }
}

