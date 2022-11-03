# Tim's Symbols
Copyright 2022 John Carlson (JavaScript) Tim Climie (symbol design and mapping).  All Rights Reserved.


Curves = even bits
Sticks = odd bits

8:
	choose all bits
7:
	leave out 1 even bit
	leave out 1 odd bit
6:
	Leave out 2 adjacent even bits
	leave out 2 non-adjacent even bits
	leave out 2 odd linear bits
	leave out 2 non-linear bits
	leave out 1 even bit and 1 odd bit touching
	leave out 1 even bit and 1 odd bit not touching
5:
	leave out 2 adjacent even bits and 1 adjacent odd bit
	leave out 2 adjacent even bits and 1 non-adjacent odd bit
	leave out 2 non-adjacent even bits and 1 adjacent odd bit
	leave out 2 non-adjacent even bits and 1 non-adjacent odd bit
	leave out 3 adjacent even bits
	leave out 3 adjacent one bits
	leave out 1 adjacent even bits and 2 adjacent odd bit
	leave out 1 adjacent even bits and 2 non-adjacent odd bit
	leave out 1 non-adjacent even bits and 2 adjacent odd bit
	leave out 1 non-adjacent even bits and 2 non-adjacent odd bit
4:
	leave out 4 even bits (40.1.4)
	leave out 4 odd bits (40.2.4)

	leave out 3 even bits and 1 adjacent odd bit, no-intersections  (40.1.2)
	leave out 3 even bits and 1 adjacent odd bit, loop intersection (40.2.1)

	leave out 2 non-adjacent even bits and 2 non-linear odd bits (40.1.3)
	leave out 2 non-adjacent even bits and 2 non-adjacent odd bits, loop (40.2.3)
	leave out 2 non-adjacent even bits and 2 linear odd bits (12.1)

	leave out 2 adjacent even bits and 2 non-linear odd bits (12.2)
	leave out 2 adjacent even bits and 2 linear odd bits (40.1.5)
	leave out 2 adjacent even bits and 2 linear odd bits, loop (40.2.5)

	leave out 2 adjacent even bits and 2 non-linear odd bits  (12.3)

	leave out 1 even bit and 3 adjacent odd bits, no-intersections (40.2.2)
	leave out 1 even bit and 3 adjacent odd bits, 1 intersection (40.1.1)

3:
	choose 2 adjacent even bits and 1 adjacent odd bit
	choose 2 adjacent even bits and 1 non-adjacent odd bit
	choose 2 non-adjacent even bits and 1 adjacent odd bit
	choose 2 non-adjacent even bits and 1 non-adjacent odd bit
	choose 3 adjacent even bits
	choose 3 adjacent one bits
	choose 1 adjacent even bits and 2 adjacent odd bit
	choose 1 adjacent even bits and 2 non-adjacent odd bit
	choose 1 non-adjacent even bits and 2 adjacent odd bit
	choose 1 non-adjacent even bits and 2 non-adjacent odd bit
2:
	choose 2 adjacent even bits
	choose 2 non-adjacent even bits
	choose 2 linear odd bits
	choose 2 non-linear odd bits
	choose 1 even bit and 1 odd bit touching
	choose 1 even bit and 1 odd bit not touching

1: 	choose 1 even bit
	choose 1 odd bit
0:
	choose 0 bits
