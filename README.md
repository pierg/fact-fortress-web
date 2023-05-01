# Fact Fortress Web
<p align="left">
  <img src="./docs/logo-web-500.png" alt="Fact Fortress Logo" width="150"/>
</p>

This repository contains the code for the front-end of Fact Fortress, including a demo for the back-end.

The static front-end for the demo is available on GitHub Pages at the following link: [https://pierg.github.io/fact-fortress-web/](https://pierg.github.io/fact-fortress-web/). To run the demo locally on your machine, please follow the instructions below.

<p align="center">
  <img src="./docs/website.png" alt="Fact Fortress Home Page" width="500"/>
</p>


## What is Fact Fortress

[Fact Fortress](https://pierg.github.io/fact-fortress-web/) is a framework that combines blockchain technology and zero-knowledge proofs to enable trustworthy and private fact-checking. 
By leveraging proofs of data provenance and auditable data access policies, we ensure the trustworthiness of how sensitive data is handled, and provide assurance of the computations that have been performed on it.
In addition, our solution democratizes circuit construction and deployment by providing a circuit compiler that supports various data formats and source authentication, and facilitates the deployment of on-chain verifiers.

Our framework provides a powerful mechanism for preserving the privacy of sensitive data while ensuring accountability and transparency in the actions taken on the data. By enabling on-chain verification of computation and data provenance without revealing any information about the data itself, our solution ensures the integrity of the computations on the data while preserving its privacy.



## Demo 

<p align="center">
  <img src="./docs/demo.png" alt="Front-end" width="500"/>
</p>


You can find a video showing how to use the demo on our website
[on our website](https://pierg.github.io/fact-fortress-web/demo) .


To run the demo, follow these instructions:


## Prerequisites

- NodeJS LTS [https://nodejs.org/en/download](https://nodejs.org/en/download)
- pnpm [https://pnpm.io/fr/installation](https://pnpm.io/fr/installation)
- make

Install the backend and the frontend:

```
git clone git@github.com:pierg/fact-fortress-dapp.git
cd fact-fortress-dapp && pnpm install
git clone git@github.com:pierg/fact-fortress-frontend.git
cd fact-fortress-frontend && pnpm install
```

## Run the Demo

### Run the DApp

To deploy the backend and the frontend together, run the following command from the root directory:

```
make run
```

This command launches the backend, then opens the frontend in the browser (`http://localhost:8080`).

### Independently run the backend

From the root directory, run:

```
pnpm backend
```

(By default, the backend runs on port `3000`).

A Postman collection is provided to interact with the backend: `tools/Postman_collection/Fact_Fortress.postman_collection.json`

### Independently run the frontend


*Once the backend is running* (`► server started on port 3000 ✓`), from the root directory run:

```
pnpm frontend
```

Then, open `http://localhost:8080` on your browser.

(By default, the backend runs on port `8080`).