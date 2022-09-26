# YSIP
Youtube Share Investment Platform 

## Init node
Create files to build chains i.g) genesis.json, validator keys etc.
```shell
ignite chain build
ysipd start
```

## Add manager key 
Only permitted wallet address(manager) can burn.
```shell
ysipd keys add genesis --recover
```
Put mnemonic seeds in genesis_wallet file.

Type command below to check if genesis key well recovered from seed. 
```shell
yspid keys list
```

## Start node after initiating chain
```shell
ysipd start
```


