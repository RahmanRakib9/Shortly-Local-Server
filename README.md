# URL Entity:

## Generate new short URL :
- Endpoint: POST /api/v1/urls
- Description: Generate a new short URL.
- Request Body:
```
{
    "redirectURL":  "https://translate.google.com/?sl=en&tl=bn&op=translate"
}
```
- Response :
```
{
    "success": true,
    "message": "Successfully generated short url",
    "payload": {
        "shortId": "zMpYBY",
        "redirectUrl": "https://translate.google.com/?sl=en&tl=bn&op=translate",
        "visitHistory": [],
        "_id": "661f84a1fcaea34bbf52c44a",
        "createdAt": "2024-04-17T08:13:21.865Z",
        "updatedAt": "2024-04-17T08:13:21.865Z",
        "__v": 0
    }
}
```

## Redirect to the given URL :
- Endpoint: GET /api/v1/urls/zMpYBY
- Description: Redirect user to the given URL.
- Request Body:
```
{
    GET /api/v1/urls/zMpYBY
}
```
- Response Body:
```
{
   Redirect user to https://translate.google.com/?sl=en&tl=bn&op=translate
}
```
## GET all short URLs :
- Endpoint: GET /api/v1/urls/zMpYBY
- Description: Get all the generated short urls.
- Request Body:
```
{
   GET /api/v1/urls
}
```
- Response Body:
```
{
    "success": true,
    "message": "successfully retrieved urls",
    "payload": [
        {
            "_id": "661f71647712f16531262605",
            "shortId": "UcPP2P",
            "redirectUrl": "https://chat.openai.com/",
            "visitHistory": [
                {
                    "timestamp": 1713336745317,
                    "_id": "661f71a97712f1653126265f"
                },
                {
                    "timestamp": 1713336822429,
                    "_id": "661f71f67712f16531262666"
                }
            ],
            "createdAt": "2024-04-17T06:51:16.935Z",
            "updatedAt": "2024-04-17T06:53:42.429Z",
            "__v": 0
        },
        {
            "_id": "661f7d04de56fe839e5f3607",
            "shortId": "14OM2D",
            "redirectUrl": "https://www.youtube.com/",
            "visitHistory": [
                {
                    "timestamp": 1713339719440,
                    "_id": "661f7d47de56fe839e5f360c"
                }
            ],
            "createdAt": "2024-04-17T07:40:52.758Z",
            "updatedAt": "2024-04-17T07:41:59.440Z",
            "__v": 0
        },
      // all the urls...
    ]
}
```

## GET Analytics :
- Endpoint: GET /api/v1/urls/zMpYBY
- Description: Get all the information about any specific api.
- Request Body:
- Request Body:
```
{
   GET /api/v1/analytics/14OM2D
}
```  
- Response Body:
```
{
    "totalClicks": 2,
    "payload": [
        {
            "timestamp": 1713341871207,
            "_id": "661f85affcaea34bbf52c44c"
        },
        {
            "timestamp": 1713342516427,
            "_id": "661f8834fcaea34bbf52c457"
        }
    ]
}
```

# User Entity:

## Create a New User
- Endpoint: POST /api/v1/register
- Description: Creates a new user in the database.
- Request Body:
```
{
   "name": "Rakibur Rahman Rakib",
   "email": "rahman.rakibur.rakibb@gmail.com",
   "password": "password_super_secret#$%@*"
},
```
- Response :
```
{
    "success": true,
    "message": "User Created Successfully!",
    "payload": {
        "name": "Rakibur Rahman Rakib",
        "email": "rahman.rakibur.rakibb@gmail.com",
        "_id": "661f80c714ff27b9c6613c79"
    }
}
```

## Sign in to a existing user
- Endpoint: POST /api/v1/register
- Description: Creates a new user in the database.
- Request Body:
```
{
    "email": "rahman.rakibur.rakibb@gmail.com",
    "password": "password_super_secret#$%@*"
}
```
- Response :
```
{
    "success": true,
    "message": "User loggedIn Successfully!",
    "payload": {
        "name": "Rakibur Rahman Rakib",
        "email": "rahman.rakibur.rakibb@gmail.com",
        "_id": "661f80c714ff27b9c6613c79"
    }
}
```

