# TeamInterval_MachineTest

Created API's for the following using Node Js and MySql.

- For creating new articles having a heading, read time, description, categories, a thumbnail image, a featured image and also have to know whether it is verified, newest, and trending.

- For creating and listing categories for these articles.

- For listing all articles.

- For the listing of articles based on each category.

- For editing an article.

- For removing an article from the database.
## API Reference

#### Insert 

```http
  POST /categories/add_category
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `category_name ` | String | **Required**|

#### Get All categories

```http
  GET /categories
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`      |  | **Required**. |


#### Insert 

```http
  POST /articles/add_article
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `heading ` | String | **Required**|
| `read_time ` | String | **Required**|
| `description ` | String | **Required**|
| `categories ` | String | **Required**|
| `thumbnail ` | Image | Thumbnail Image of the article, **Required**|
| `featured ` | Image | Featured Image of the article, **Required**|
| `status ` | String | **Required**|

