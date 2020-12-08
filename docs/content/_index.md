---
title: "Tailwind CSS with Bootstrap JS"
---

## Get Started

Hellonext API V3 is an organization based access. Use this to query for latest posts, submit a post and more.

First, you will need to obtain an API token.

1. Navigate to the "Advanced Settings" page. Dashboard > Settings > Advanced > API Key

2. Click on the “Generate” button in the API Key section.

![Generate API Token](image1.png)

3. Copy the generated token. (In this case it is “3IIlJZNFukq3BRh76_aw4Q”)

![Copy API Token](image2.png)

4. This token will need to be sent in the header section of every API request.

```js
header[“API-KEY”] = “3IIlJZNFukq3BRh76_aw4Q”
```

## API Documentation

### Organization Information

This endpoint helps you extract organization information such as name, profile picture, list of buckets and more.

**Request**

GET /api/v3/organizations/info

**Request Header**

API-KEY 3IIlJZNFukq3BRh76_aw4Q

**Response**

```json
{
  "success": true,
  "organization": {
    "id": xxx,
    "name": "hellonext",
    "display_name": "Hellonext",
    "description": "",
    "url": null,
    "profile": null
  },
  "buckets": [
    {
      "id": xxx,
      "name": "ABC",
      "default": false
    },
    {
      "id": xxx,
      "name": "XYZ",
      "default": false
    }
  ]
}
```

### Submit Post

A post can be submitted by sending the required attributes such as title, description, and bucket.

**Request**

POST /api/v3/feature_requests/submit

**Request Header**

API-KEY 3IIlJZNFukq3BRh76_aw4Q

**Response**

```json
{
  "id": xxx,
  "slug": "abc",
  "title": "ABC",
  "description": "ABC ABC ABC",
  "attachments": [],
  "submitter": "Swaathi Kakarla",
  "status": "under_review",
  "bucket": "Internal Suggestions",
  "url": "https://feedback.hellonext.co/features/xxx",
  "votes_count": 1,
  "comments_count": 0,
  "created_at": "2020-07-15T12:51:06.000+05:30",
  "updated_at": "2020-07-15T12:51:06.000+05:30"
}
```

### View Latest Posts

Fetch latest submitted posts with a paginated response.

**Request**

GET /api/v3/feature_requests/latest

**Request Header**

API-KEY 3IIlJZNFukq3BRh76_aw4Q

**Response**

```json
{
  "success": true,
  "feature_requests": [
    {
      "id": xxx,
      "slug": "pqr",
      "title": "PQR",
      "description": "PQR PQR",
      "attachments": [],
      "submitter": "Praveen Juge",
      "status": "in_progress",
      "bucket": "Feature Requests",
      "url": "https://feedback.hellonext.co/features/pqr",
      "votes_count": 3,
      "comments_count": 1,
      "created_at": "2020-06-30T12:36:36.000+05:30",
      "updated_at": "2020-07-01T10:18:14.000+05:30"
    },
    {
      "id": xxx,
      "slug": "abc",
      "title": "ABC",
      "description": "ABC ABC",
      "attachments": [],
      "submitter": "Swaathi Kakarla",
      "status": "in_progress",
      "bucket": "Feature Requests",
      "url": "https://feedback.hellonext.co/features/abc",
      "votes_count": 1,
      "comments_count": 0,
      "created_at": "2020-06-30T12:36:36.000+05:30",
      "updated_at": "2020-07-01T10:18:14.000+05:30"
    }
  ]
}
```
