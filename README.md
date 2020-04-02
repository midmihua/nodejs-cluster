### Clustering in NodeJS

```shell script
ps | grep node

  231 ttys005    0:00.07 /Users/.nvm/versions/node/v12.16.1/bin/node worker.js worker.js
  269 ttys006    0:00.00 grep node
```
```shell script
kill pid
kill -s SIGUSR2 pid
```
```shell script
curl localhost:3000

 Hello from Node.JS 
```

```shell script
autocannon -c 200 -d 10 http://localhost:3000

Running 10s test @ http://localhost:3000
200 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max       │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────────┤
│ Latency │ 3 ms │ 4 ms │ 6 ms  │ 9 ms │ 4.24 ms │ 1.82 ms │ 114.27 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 34975   │ 34975   │ 43903   │ 45407   │ 42392.73 │ 3161.76 │ 34944   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 4.19 MB │ 4.19 MB │ 5.27 MB │ 5.45 MB │ 5.09 MB  │ 380 kB  │ 4.19 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

466k requests in 11.1s, 56 MB read
```

