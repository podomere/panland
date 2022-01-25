#!/usr/bin/env bash

# Damn it, turns out the BannerBear free trial credits of 30 API images are non-renewable i.e. not per month, total lifetime!

if [[ $# -eq 0 ]] ; then
    echo 'Please provide a name for the image file <name>.jpg where only <name> is required'
    exit 1
fi

token="bb_pr_f624871a5c5f672d6d34a35fb66279"

post_request='{
  "template": "RnxGpW5la3YDEXrJ1Y",
  "modifications": [
    {
      "name": "photo",
      "image_url": "https://pansift.com/images/laptop_inlay_insights_v4_social.png"
    },
    {
      "name": "overlay",
      "color": null
    },
    {
      "name": "logo",
      "image_url": "https://pansift.com/images/blog/icon_ps_rounded_400_400.png"
    },
    {
      "name": "author",
      "text": "PanSift your Problems!",
      "color": null,
      "background": null
    },
    {
      "name": "title",
      "text": "Easy Remote Troubleshooting for IT Teams",
      "color": null,
      "background": null
    }
  ],
  "webhook_url": null,
  "transparent": false,
  "metadata": null
}'

echo $post_request

uid=$(curl -s -H "Content-Type: application/json" -H "Authorization: Bearer $token" -X POST -d "$post_request" https://api.bannerbear.com/v2/images | jq .uid | tr -d '"')
sleep 3
echo $uid

location=$(curl -s -H "Content-Type: application/json" -H "Authorization: Bearer $token" -X GET https://api.bannerbear.com/v2/images/$uid | jq .image_url_jpg | tr -d '"')
echo $location

echo "Argument supplied was $1"
curl -s $location -o ../static/images/blog/$1.jpg
