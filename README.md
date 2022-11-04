# Tim's Symbols
Copyright 2022 John Carlson (JavaScript) Tim Climie (symbol design and mapping).  All Rights Reserved.

```
Curves = even bits
Sticks = odd bits

0 curves = 4 choose 0 = 1 => 1 unique positions
1 curves = 4 choose 1 = 4 => 1 unique positions
2 curves = 4 choose 2 = 6 => 2 unique positions
3 curves = 4 choose 3 = 4 => 1 unique positions
4 curves = 4 choose 4 = 1 => 1 unique positions

Sub-total  16 combinations or 6 positions

0 sticks = 4 choose 0 = 1 => 1 unique positions
1 sticks = 4 choose 1 = 4 => 1 unique positions
2 sticks = 4 choose 2 = 6 => 2 unique positions
3 sticks = 4 choose 3 = 4 => 1 unique positions
4 sticks = 4 choose 4 = 1 => 1 unique positions

Sub-total 16 combinations or 6 positions

Total = 16x16 or 6x6 = 256 or 36


7:2
	leave out 1 curve bit
	leave out 1 stick bit
6:6
	leave out 2 adjacent curve bits
	leave out 2 non-adjacent curve bits
	leave out 2 stick linear bits
	leave out 2 stick non-linear bits
	leave out 1 curve bit and 1 stick bit touching
	leave out 1 curve bit and 1 stick bit not touching
5:10
	leave out 2 adjacent curve bits and 1 adjacent stick bit
	leave out 2 adjacent curve bits and 1 non-adjacent stick bit
	leave out 2 non-adjacent curve bits and 1 adjacent stick bit
	leave out 2 non-adjacent curve bits and 1 non-adjacent stick bit
	leave out 3 adjacent curve bits
	leave out 3 adjacent one bits
	leave out 1 adjacent curve bits and 2 adjacent stick bit
	leave out 1 adjacent curve bits and 2 non-adjacent stick bit
	leave out 1 non-adjacent curve bits and 2 adjacent stick bit
	leave out 1 non-adjacent curve bits and 2 non-adjacent stick bit
4:13
	leave out 4 curve bits (40.1.4)
	leave out 4 stick bits (40.2.4)
	leave out 3 curve bits and 1 adjacent stick bit, no-intersections  (40.1.2)
	leave out 3 curve bits and 1 adjacent stick bit, loop intersection (40.2.1)
	leave out 2 non-adjacent curve bits and 2 non-linear stick bits (40.1.3)
	leave out 2 non-adjacent curve bits and 2 non-linear stick bits, loop (40.2.3)
	leave out 2 non-adjacent curve bits and 2 linear stick bits (12.1)
	leave out 2 adjacent curve bits and 2 non-linear stick bits (12.3)
	leave out 2 adjacent curve bits and 2 non-linear stick bits, loop (12.2)
	leave out 2 adjacent curve bits and 2 linear stick bits (40.1.5)
	leave out 2 adjacent curve bits and 2 linear stick bits, loop (40.2.5)
	leave out 1 curve bit and 3 adjacent stick bits, no-intersections (40.2.2)
	leave out 1 curve bit and 3 adjacent stick bits, 1 intersection (40.1.1)
3:10
	choose 2 adjacent curve bits and 1 adjacent stick bit
	choose 2 adjacent curve bits and 1 non-adjacent stick bit
	choose 2 non-adjacent curve bits and 1 adjacent stick bit
	choose 2 non-adjacent curve bits and 1 non-adjacent stick bit
	choose 3 adjacent curve bits
	choose 3 adjacent one bits
	choose 1 adjacent curve bits and 2 adjacent stick bit
	choose 1 adjacent curve bits and 2 non-adjacent stick bit
	choose 1 non-adjacent curve bits and 2 adjacent stick bit
	choose 1 non-adjacent curve bits and 2 non-adjacent stick bit
2:6
	choose 2 adjacent curve bits
	choose 2 non-adjacent curve bits
	choose 2 linear stick bits
	choose 2 non-linear stick bits
	choose 1 curve bit and 1 stick bit touching
	choose 1 curve bit and 1 stick bit not touching
1:2
	choose 1 curve bit
	choose 1 stick bit
```
