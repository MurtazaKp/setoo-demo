const VOICE_CALL_API =
  "https://ai-voicecall-bot.onrender.com" ||
  process.env.NEXT_PUBLIC_VOICE_CALL_API;

export const postData = async (url, data) => {
  try {
    const response = await fetch(`${VOICE_CALL_API}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json(); // Or response.text() if the response isn't JSON
    return result;
  } catch (err) {
    console.error("Error in postData:", err);
    return err;
  }
};
