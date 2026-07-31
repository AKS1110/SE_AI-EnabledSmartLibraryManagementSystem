SHELL	:= /bin/zsh

CXXFLAGS:= -O2 -Wall -Wextra -fPIC
CXXFLAGS += -std=c++17 -Iinc

LDFLAGS += -Ldist/lib

all: dist/lib dist/bin dist/obj/lib/Bvr/Math dist/lib/libbvr_math.so dist/bin/run

dist/obj/lib/Bvr/Math/math.o : src/lib/Bvr/Math/math.cpp
	$(CXX) $(CXXFLAGS) $(CFLAGS) $(FLAGS) -c -o $@ $^

dist/lib/libbvr_math.so : FLAGS+= -shared -Wl,-soname,libbvr_math.so
dist/lib/libbvr_math.so : dist/obj/lib/Bvr/Math/math.o
	$(CXX) $(CXXFLAGS) $(CFLAGS) $(FLAGS) -o $@ $^

dist/bin/run : src/bin/run_main.cpp 
	$(CXX) $(CXXFLAGS) $(CFLAGS) $(LDFLAGS) $(FLAGS) -lbvr_math -o $@ $^

dist/lib dist/bin dist/obj/lib/Bvr/Math:
	-mkdir -p $(@)

clean:
	rm -rf dist
