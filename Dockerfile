FROM golang:1.18

WORKDIR /

COPY . ./ysip
COPY ./wasm_lib/libwasmvm_muslc.aarch64.a /lib/libwasmvm_muslc.aarch64.a
COPY ./wasm_lib/libwasmvm_muslc.x86_64.a /lib/libwasmvm_muslc.x86_64.a

RUN cp "/lib/libwasmvm_muslc.$(uname -m).a" /lib/libwasmvm_muslc.a

WORKDIR ysip

RUN chmod +x ./ignite_cli
RUN bash -ec ./ignite_cli
RUN mv ./ignite /usr/bin

ENTRYPOINT ["bash", "-ec"]