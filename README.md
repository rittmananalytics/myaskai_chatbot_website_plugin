# MyAskAI-powered Chatbot for Squarespace Websites

This chatbot plugin is designed for Squarespace-powered websites and allows visitors to ask questions and receive answers from MyAskAI, a ChatGPT-style LLM service that you can configure with your own links, content and files along with pre-trained model content from OpenAI. 

Note that this code should also work on other types of website CMSs that allow CSS and Javascript code-injection on pages.

To sign-up for your own MyAskAI account to power your chatbot, use this link: [Create Your AskAI](https://myaskai.com?via=de1v7wwv3adx135kl6mq)

## Overview

The chatbot plugin displays a floating icon on the bottom right-hand corner of the user's screen. When clicked, it opens a dialog with an input box to type questions. The chatbot communicates with a REST API endpoint to get answers to the user's questions.

## How it works

1. When the user clicks on the chatbot icon, it displays a dialog with an input box and a chatbot prompt.
2. The user types their question in the input box and presses Enter.
3. The plugin sends the user's question to the MyAsKAI REST API endpoint.
4. The API responds with the answer, which is then displayed in the chatbot dialog.

## Installation

To install the chatbot plugin on your Squarespace website, follow these steps:

1. Log in to your Squarespace account and go to your website editor.
2. Go to Settings > Advanced > Code Injection.
3. Copy the content of `chatbot.html` and paste it into the Footer section.
4. Update the following variables in the code with your own values:

- `<YOUR_ID>`: Replace this with your unique ID.
- `<YOUR_API_KEY>`: Replace this with your API key.
- `<YOUR_CHATBOT_PROMPT>`: Replace this with your custom chatbot prompt text.
- `<YOUR_CHATBOT_ICON_IMAGE_URL>`: Replace this with the URL of your chatbot icon image.

5. Save the changes.

After completing these steps, the chatbot plugin should be active on your Squarespace website.

## Customization

You can further customize the chatbot appearance by editing the CSS styles in the `chatbot.html` file. If you want to modify the chatbot behavior, you can update the JavaScript code in the `chatbot.html` file.

Please note that you need to have some knowledge of HTML, CSS, and JavaScript to make these customizations.
