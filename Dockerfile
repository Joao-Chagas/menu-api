FROM node:16-alpine as builder

USER node
WORKDIR /home/node

COPY package*.json ./
RUN yarn

COPY --chown=node:node . .

RUN yarn prisma generate
RUN yarn build

# ---

FROM node:16-alpine

EXPOSE 3000
ENV PORT 3000

USER node
WORKDIR /home/node

ENV DATABASE_URL postgres://tdyluttvarghfu:29cbc4013beb829e376fb70a3aa80e440bf084a2ea42b52e04cece0eaa25c8c1@ec2-34-201-95-176.compute-1.amazonaws.com:5432/d27vuj274jhh2k

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

CMD ["node", "dist/main.js"]