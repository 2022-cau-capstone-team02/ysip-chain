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

## Send coin from validator to manager
```shell
ysipd tx bank send validator ysip102xnfc6d5j8j7tshq3yrg0t7kr8tsd2y242ku0 1000000ukrw -y
```

## Mint coin
```shell
ysipd tx ysip mintcoin 1000000ukrw ysip102xnfc6d5j8j7tshq3yrg0t7kr8tsd2y242ku0 --from genesis
```

## Burn coin
```shell
ysipd tx ysip burncoin 1000000ukrw ysip102xnfc6d5j8j7tshq3yrg0t7kr8tsd2y242ku0 --from genesis
```


