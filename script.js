const API_KEY = "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"
const submitButton = document.querySelector(".button")
const promptValue = document.querySelector(".input")
const img = document.querySelector(".image")

const getImages = async () => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "prompt": promptValue.value,
            "n": 1,
            "size": "1024x1024"
        })
    }
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", options)
        const data = await response.json()
        console.log(data)
        img.src = data["data"][0]["url"]
    } catch (error) {
        console.log(error)
    }
}

// getImages()
submitButton.addEventListener("click", getImages)