#!/usr/bin/env bash

post_request="{
  \"template\": \"RnxGpW5la3YDEXrJ1Y\",
  \"modifications\": [
    {
      \"name\": \"photo\",
      \"image_url\": \"https://pansift.com/images/blog/bluelights.jpg\"
    },
    {
      \"name\": \"overlay\",
      \"color\": null
    },
    {
      \"name\": \"logo\",
      \"image_url\": \"https://pansift/images/icon_ps_rounded_400_400.png\"
    },
    {
      \"name\": \"author\",
      \"text\": \"Donal O Duibhir, PanSift\",
      \"color\": null,
      \"background\": null
    },
    {
      \"name\": \"title\",
      \"text\": \"Let's find out more!\",
      \"color\": null,
      \"background\": null
    }
  ],
  \"webhook_url\": null,
  \"transparent\": false,
  \"metadata\": null
}"

echo $post_request
