---
layout: project
name: 'DataStore: External data feeds in a few clicks'
short_name: DataStore
company: Cortex Intelligence
year: 2015
summary: Cloud-based platform to aggregate, enrich, store and distribute structured and non-structured data, as crawled news, indexes and social media posts.
url: 'http://www.cortex-intelligence.com/explore'
thumbnail: /uploads/project-datastore.png
---
Cloud-based platform to aggregate, enrich, store and distribute structured and
non-structured data, as crawled news, indexes and social media posts.
Currently, it is in its second version. Its front-end was developed using
AngularJS, LESS and Bootstrap. Its backend was developed using Java (Spring,
JPA, Jersey, Retrofit) and Javascript (NodeJS). It uses many services
available by Amazon. Also, it uses RabbitMQ to message-based communication and
PostgreSQL, RethinkDB and Elasticsearch as databases.


In its first version, it could collect data using a robust scheduler system.
It monitored new demands and scheduled specific crawlers to collect a given
data and deliver it directly to DataStore.
