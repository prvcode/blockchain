# NodeJs ExpressJs MongoDB

## Concepts
* REST API principals
    * CRUD
    * HTTP methods

## Technologies
* NodeJs
* MongoDB with Mongoose
* TypeScript
* ExpressJs

## API

#### Create Blockchain Node
```http
POST /api/blockchain/node
```
```javascript
{
    "tx_hash" : "35",
    "from" : "Ipsita",
    "to" : "Kaustav",
    "timestamp" : "Friday, 12 November 2021 17:59:20 GMT+08:00",
    "value" : "21"
}
```

#### Delete Blockchain Node

```http
DEL /api/blockchain/node/:tx_hash
```

#### Create Blockchain
```http
POST /api/blockchain
```
```javascript
[
    {
        "tx_hash" : "34",	
        "from" : "Raj",
        "to" : "Ipsita",
        "timestamp" : "Friday, 12 November 2021 17:58:20 GMT+08:00",
        "value" : "17.5"
    },
    {
        "tx_hash" : "35",
        "from" : "Ipsita",
        "to" : "Kaustav",
        "timestamp" : "Friday, 12 November 2021 17:59:20 GMT+08:00",
        "value" : "21"
    }
]
```
#### Get Blockchain
```http
GET /api/blockchain
```
#### Get Blockchain Via Orgin and Hops
```http
GET /api/blockchain/:origin/:hops
```
#### Delete Blockchain Node
```http
DEL /api/blockchain/remove
```

## Docker

```javascript
docker build -t node-express-mongo .
docker run -p 8081:8081 node-express-mongo
```
