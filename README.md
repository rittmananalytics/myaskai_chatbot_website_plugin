# MyAskAI-powered Chatbot for Squarespace Websites

This chatbot plugin is designed for Squarespace-powered websites and allows visitors to ask questions and receive answers from MyAskAI, a ChatGPT-style LLM service that you can configure with your own links, content and files along with pre-trained model content from OpenAI. 

Note that this code should also work on other types of website CMSs that allow CSS and Javascript code-injection on pages.

To sign-up for your own MyAskAI account to power your chatbot, use this link: [Create Your AskAI](https://myaskai.com?via=de1v7wwv3adx135kl6mq)

## Overview

The chatbot plugin displays a floating icon on the bottom right-hand corner of the user's screen. When clicked, it opens a dialog with an input box to type questions. The chatbot communicates with a REST API endpoint to get answers to the user's questions.

## How it works

1. When the user clicks on the chatbot icon, it displays a dialog with an input box and a chatbot prompt.

<img src='https://user-images.githubusercontent.com/3772831/230965123-8d6c8eb0-e69f-4cf9-be0d-8dbf49ac2b27.png' width="100"/>

2. The user types their question in the input box and presses Enter.

<img src='https://github.com/rittmananalytics/myaskai_chatbot_website_plugin/blob/main/images/dialog.png?raw=true' width="200"/>

4. The plugin sends the user's question to the MyAsKAI REST API endpoint.
5. The API responds with the answer, which is then displayed in the chatbot dialog.

<img src='https://github.com/rittmananalytics/myaskai_chatbot_website_plugin/blob/main/images/answer.png?raw=true' width="200"/>

## Installation

To install the chatbot plugin on your Squarespace website, follow these steps:

1. Clone this repo to your local filesystem, and replace the following placeholder values in the chatbot.js file:
- `<YOUR_ID>`: Replace this with your unique ID.
- `<YOUR_API_KEY>`: Replace this with your API key.
- `<YOUR_CHATBOT_PROMPT>`: Replace this with your custom chatbot prompt text.

and the following placeholder value in the chatbot.css file:
- `<YOUR_CHATBOT_ICON_IMAGE_URL>`: Replace this with the URL of your chatbot icon image.

2. Log in to your Squarespace account and navigate to Pages > Not Linked, press the "+" button and choose Link.
3. In the link editor, click the gear icon in the URL field, then click the File tab.
4. Click Upload File and select the chatbot.js file to upload. After uploading, click the `chatbot.js` file in the list. A checkmark appears beside the chosen file.
5. Click Save, make a note of the link URL (usually `/s/chatbot.js`) and then press Close.
6. Repeat steps 2-5 to upload the chatbot.css file and make a note of its URL, which is also typically `/s/chatbot.css`
7. Still within the Squarespace website editor, navigate to Settings > Advanced > Code Injection.
8. In the "Footer" section, add the following code, replacing `path/to` with your website URL and folder where the `chatbot.js` file was uploaded, for example `https://rittmananalytics.com/s/`

`<script src="path/to/chatbot-plugin.js"></script>`

9. In the "Header" section, add the following code, replacing `path/to` with your website URL and folder where the chatbot.css file was uploaded, for example `https://rittmananalytics.com/s/`

`<link rel="stylesheet" href="path/to/chatbot.css" />`

10. Save the changes.

After completing these steps, the chatbot plugin should be active on your Squarespace website.

## Customization

You can further customize the chatbot appearance by editing the CSS styles in the `chatbot.css` file. If you want to modify the chatbot behavior, you can update the JavaScript code in the `chatbot.js` file.

Please note that you need to have some knowledge of HTML, CSS, and JavaScript to make these customizations.
