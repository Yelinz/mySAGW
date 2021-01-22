# mySAGW

!!!WIP!!!

[![Build Status](https://github.com/adfinis-sygroup/mySAGW/workflows/Tests/badge.svg)](https://github.com/adfinis-sygroup/mySAGW/actions?query=workflow%3ATests)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](https://github.com/adfinis-sygroup/mySAGW/blob/master/api/setup.cfg#L53)
[![Black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/adfinis-sygroup/mySAGW)
[![License: GPL-3.0-or-later](https://img.shields.io/github/license/adfinis-sygroup/mySAGW)](https://spdx.org/licenses/GPL-3.0-or-later.html)

Application management for SAGW

## Getting started

### Installation

**Requirements**
* docker
* docker-compose

After installing and configuring those, download [docker-compose.yml](https://raw.githubusercontent.com/adfinis-sygroup/mysagw/master/docker-compose.yml) and run the following command:

```bash
docker-compose up -d
```

You can now access the api at [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/).

This will load the config data into Caluma:

```bash
make caluma-loadconfig
```

### Development

Load the config data into Caluma:

```bash
make caluma-loadconfig
```

Add `mysagw.local` to `/etc/hosts`:

```bash
echo "127.0.0.1 mysagw.local" | sudo tee -a /etc/hosts
```

You can now access the application under the following URIs:

 - http://mysagw.local/auth/ --> keycloak
 - http://mysagw.local:4200/ --> frontend
 - http://mysagw.local/api/ --> backend
 - http://mysagw.local/graphql/ --> caluma

### Configuration

mySAGW is a [12factor app](https://12factor.net/) which means that configuration is stored in environment variables.
Different environment variable types are explained at [django-environ](https://github.com/joke2k/django-environ#supported-types).

#### Common

A list of configuration options which you need

* `SECRET_KEY`: A secret key used for cryptography. This needs to be a random string of a certain length. See [more](https://docs.djangoproject.com/en/2.1/ref/settings/#std:setting-SECRET_KEY).
* `ALLOWED_HOSTS`: A list of hosts/domains your service will be served from. See [more](https://docs.djangoproject.com/en/2.1/ref/settings/#allowed-hosts).
* `DATABASE_ENGINE`: Database backend to use. See [more](https://docs.djangoproject.com/en/2.1/ref/settings/#std:setting-DATABASE-ENGINE). (default: django.db.backends.postgresql)
* `DATABASE_HOST`: Host to use when connecting to database (default: localhost)
* `DATABASE_PORT`: Port to use when connecting to database (default: 5432)
* `DATABASE_NAME`: Name of database to use (default: mysagw)
* `DATABASE_USER`: Username to use when connecting to the database (default: mysagw)
* `DATABASE_PASSWORD`: Password to use when connecting to database

## Contributing

Look at our [contributing guidelines](CONTRIBUTING.md) to start with your first contribution.
