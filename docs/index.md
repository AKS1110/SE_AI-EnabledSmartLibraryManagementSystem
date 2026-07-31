![Tiet Logo](assets/tiet-logo.svg){ .tiet-logo }

**UCS503: Software Engineering (Project)**  
**TIET Patiala**

# The Sum Function in C++

**Author(s)**:

`(RGB)` Raghav B. Venkataramaiyer `<bv.raghav -at-
thapar -dot- edu>`

This project creates a sum function in c++ as a sample
to illustrate how to compile a shared library and
distribute it for use along with the binary.

## Installation

``` shell
make -C code
```

This will create create a folder `dist` in `code`
folder, with following contents

```
dist
 +-lib
 |  \-libbvr_math.so
 +-bin
    \-run
```

## Usage

``` shell
cd code
export LD_LIBRARY_PATH=dist/lib
./dist/bin/run
```
