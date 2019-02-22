
function InitGames()
{
leftWindow.iindex0.value=GMS(m0, n0, 0, b0, 'indexg0.htm');
leftWindow.iindex1.value=GMS(m1, n1, 1, b1, 'indexg1.htm');
leftWindow.iindex2.value=GMS(m2, n2, 2, b2, 'indexg2.htm');
leftWindow.iindex3.value=GMS(m3, n3, 3, b3, 'indexg3.htm');
leftWindow.iindex4.value=GMS(m4, n4, 4, b4, 'indexg4.htm');
leftWindow.iindex5.value=GMS(m5, n5, 5, b5, 'indexg5.htm');
leftWindow.iindex6.value=GMS(m6, n6, 6, b6, 'indexg6.htm');
leftWindow.iindex7.value=GMS(m7, n7, 7, b7, 'indexg7.htm');
leftWindow.iindex8.value=GMS(m8, n8, 8, b8, 'indexg8.htm');
leftWindow.iindex9.value=GMS(m9, n9, 9, b9, 'indexg9.htm');
leftWindow.iindex10.value=GMS(m10, n10, 10, b10, 'indexg10.htm');
leftWindow.iindex11.value=GMS(m11, n11, 11, b11, 'indexg11.htm');
leftWindow.iindex12.value=GMS(m12, n12, 12, b12, 'indexg12.htm');
leftWindow.iindex13.value=GMS(m13, n13, 13, b13, 'indexg13.htm');
leftWindow.iindex14.value=GMS(m14, n14, 14, b14, 'indexg14.htm');
leftWindow.iindex15.value=GMS(m15, n15, 15, b15, 'indexg15.htm');
leftWindow.iindex16.value=GMS(m16, n16, 16, b16, 'indexg16.htm');
leftWindow.iindex17.value=GMS(m17, n17, 17, b17, 'indexg17.htm');
}

function MoveForwardAnim()
{
if ( nAnimate[0] == 1 )
{
	if ( nMoves[0] < rightWindow.m0[0].length / 2 )
		b0=MF(m0, n0, 0, b0, 'indexg0.htm',false);
	else
		b0=GoStart(m0, n0, 0, b0, 'indexg0.htm');
	GMS(m0, n0, 0, b0, 'indexg0.htm');
}
if ( nAnimate[1] == 1 )
{
	if ( nMoves[1] < rightWindow.m1[0].length / 2 )
		b1=MF(m1, n1, 1, b1, 'indexg1.htm',false);
	else
		b1=GoStart(m1, n1, 1, b1, 'indexg1.htm');
	GMS(m1, n1, 1, b1, 'indexg1.htm');
}
if ( nAnimate[2] == 1 )
{
	if ( nMoves[2] < rightWindow.m2[0].length / 2 )
		b2=MF(m2, n2, 2, b2, 'indexg2.htm',false);
	else
		b2=GoStart(m2, n2, 2, b2, 'indexg2.htm');
	GMS(m2, n2, 2, b2, 'indexg2.htm');
}
if ( nAnimate[3] == 1 )
{
	if ( nMoves[3] < rightWindow.m3[0].length / 2 )
		b3=MF(m3, n3, 3, b3, 'indexg3.htm',false);
	else
		b3=GoStart(m3, n3, 3, b3, 'indexg3.htm');
	GMS(m3, n3, 3, b3, 'indexg3.htm');
}
if ( nAnimate[4] == 1 )
{
	if ( nMoves[4] < rightWindow.m4[0].length / 2 )
		b4=MF(m4, n4, 4, b4, 'indexg4.htm',false);
	else
		b4=GoStart(m4, n4, 4, b4, 'indexg4.htm');
	GMS(m4, n4, 4, b4, 'indexg4.htm');
}
if ( nAnimate[5] == 1 )
{
	if ( nMoves[5] < rightWindow.m5[0].length / 2 )
		b5=MF(m5, n5, 5, b5, 'indexg5.htm',false);
	else
		b5=GoStart(m5, n5, 5, b5, 'indexg5.htm');
	GMS(m5, n5, 5, b5, 'indexg5.htm');
}
if ( nAnimate[6] == 1 )
{
	if ( nMoves[6] < rightWindow.m6[0].length / 2 )
		b6=MF(m6, n6, 6, b6, 'indexg6.htm',false);
	else
		b6=GoStart(m6, n6, 6, b6, 'indexg6.htm');
	GMS(m6, n6, 6, b6, 'indexg6.htm');
}
if ( nAnimate[7] == 1 )
{
	if ( nMoves[7] < rightWindow.m7[0].length / 2 )
		b7=MF(m7, n7, 7, b7, 'indexg7.htm',false);
	else
		b7=GoStart(m7, n7, 7, b7, 'indexg7.htm');
	GMS(m7, n7, 7, b7, 'indexg7.htm');
}
if ( nAnimate[8] == 1 )
{
	if ( nMoves[8] < rightWindow.m8[0].length / 2 )
		b8=MF(m8, n8, 8, b8, 'indexg8.htm',false);
	else
		b8=GoStart(m8, n8, 8, b8, 'indexg8.htm');
	GMS(m8, n8, 8, b8, 'indexg8.htm');
}
if ( nAnimate[9] == 1 )
{
	if ( nMoves[9] < rightWindow.m9[0].length / 2 )
		b9=MF(m9, n9, 9, b9, 'indexg9.htm',false);
	else
		b9=GoStart(m9, n9, 9, b9, 'indexg9.htm');
	GMS(m9, n9, 9, b9, 'indexg9.htm');
}
if ( nAnimate[10] == 1 )
{
	if ( nMoves[10] < rightWindow.m10[0].length / 2 )
		b10=MF(m10, n10, 10, b10, 'indexg10.htm',false);
	else
		b10=GoStart(m10, n10, 10, b10, 'indexg10.htm');
	GMS(m10, n10, 10, b10, 'indexg10.htm');
}
if ( nAnimate[11] == 1 )
{
	if ( nMoves[11] < rightWindow.m11[0].length / 2 )
		b11=MF(m11, n11, 11, b11, 'indexg11.htm',false);
	else
		b11=GoStart(m11, n11, 11, b11, 'indexg11.htm');
	GMS(m11, n11, 11, b11, 'indexg11.htm');
}
if ( nAnimate[12] == 1 )
{
	if ( nMoves[12] < rightWindow.m12[0].length / 2 )
		b12=MF(m12, n12, 12, b12, 'indexg12.htm',false);
	else
		b12=GoStart(m12, n12, 12, b12, 'indexg12.htm');
	GMS(m12, n12, 12, b12, 'indexg12.htm');
}
if ( nAnimate[13] == 1 )
{
	if ( nMoves[13] < rightWindow.m13[0].length / 2 )
		b13=MF(m13, n13, 13, b13, 'indexg13.htm',false);
	else
		b13=GoStart(m13, n13, 13, b13, 'indexg13.htm');
	GMS(m13, n13, 13, b13, 'indexg13.htm');
}
if ( nAnimate[14] == 1 )
{
	if ( nMoves[14] < rightWindow.m14[0].length / 2 )
		b14=MF(m14, n14, 14, b14, 'indexg14.htm',false);
	else
		b14=GoStart(m14, n14, 14, b14, 'indexg14.htm');
	GMS(m14, n14, 14, b14, 'indexg14.htm');
}
if ( nAnimate[15] == 1 )
{
	if ( nMoves[15] < rightWindow.m15[0].length / 2 )
		b15=MF(m15, n15, 15, b15, 'indexg15.htm',false);
	else
		b15=GoStart(m15, n15, 15, b15, 'indexg15.htm');
	GMS(m15, n15, 15, b15, 'indexg15.htm');
}
if ( nAnimate[16] == 1 )
{
	if ( nMoves[16] < rightWindow.m16[0].length / 2 )
		b16=MF(m16, n16, 16, b16, 'indexg16.htm',false);
	else
		b16=GoStart(m16, n16, 16, b16, 'indexg16.htm');
	GMS(m16, n16, 16, b16, 'indexg16.htm');
}
if ( nAnimate[17] == 1 )
{
	if ( nMoves[17] < rightWindow.m17[0].length / 2 )
		b17=MF(m17, n17, 17, b17, 'indexg17.htm',false);
	else
		b17=GoStart(m17, n17, 17, b17, 'indexg17.htm');
	GMS(m17, n17, 17, b17, 'indexg17.htm');
}
	window.setTimeout( "MoveForwardAnim()", 1000 );
}
// Copyright 98,99,00,01 by ChessBase GmbH, Germany
function Init( path )
{ gifs = new Array(6);
	for ( var i=0; i< 26; i++)
		gifs[i]= new Image();
	gifs[0].src = path + "b.gif";
	gifs[1].src = path + "bbb.gif";
	gifs[2].src = path + "bbw.gif";
	gifs[3].src = path + "bkb.gif";
	gifs[4].src = path + "bkw.gif";
	gifs[5].src = path + "bqb.gif";
	gifs[6].src = path + "bqw.gif";
	gifs[7].src = path + "brb.gif";
	gifs[8].src = path + "brw.gif";
	gifs[9].src = path + "bnb.gif";
	gifs[10].src = path + "bnw.gif";
	gifs[11].src = path + "wbb.gif";
	gifs[12].src = path + "wbw.gif";
	gifs[13].src = path + "wrb.gif";
	gifs[14].src = path + "wrw.gif";
	gifs[15].src = path + "wqb.gif";
	gifs[16].src = path + "wqw.gif";
	gifs[17].src = path + "wkb.gif";
	gifs[18].src = path + "wkw.gif";
	gifs[19].src = path + "wnb.gif";
	gifs[20].src = path + "wnw.gif";
	gifs[21].src = path + "wpb.gif";
	gifs[22].src = path + "wpw.gif";
	gifs[23].src = path + "bpb.gif";
	gifs[24].src = path + "wpb.gif";
	gifs[25].src = path + "b.gif";
}
function CountAnchorLinks( n )
{ var nn = 0;
	for ( i=0; i < rightDocument.anchors.length; i++ )
		if ( i <= n+nn && rightDocument.anchors[i].name.substring(0,4) == 'game' )
			nn = nn + 1;
	return nn;
}
function SyncPicture( base, basename )
{	if ( base > -1 ) return base;
	for ( i=0; i < leftDocument.images.length; i++ )
	{	if ( leftDocument.images[i].name != "" )
			if ( leftDocument.images[i].name == basename )
				return i;
			else if ( leftDocument.images[i].name.substring(0,3) == basename.substring(0,3) )
				i+= 63;
	}
	return -1;
}
function MF_5( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	for ( i=0; nMoves[nm] < moves[nLevels[nm]].length / 2 && i < 10; i++ )
		MF( moves, names, nm, base, false );
	return base;
}
function MB_5( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	for ( i=0; ( nMoves[nm] > 0 || nLevels[nm] > 0 ) && i < 10; i++ )
		MB( moves, names, nm, base );
	return base;
}
function GoStart( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	while ( nMoves[nm] > 0 || nLevels[nm] > 0 )
		MB( moves, names, nm, base );
	return base;
}
function GoEnd( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	while ( nMoves[nm] < moves[nLevels[nm]].length / 2 )
		MF( moves, names, nm, base, false );
	return base;
}
function MF( moves, names, nm, base, basename, bCheckV )
{	base = SyncPicture( base, basename );
	if ( bCheckV )
	{	var b = false;
		for ( i=0; i < moves.length; i++ )
			if ( i != nLevels[nm] && moves[i].root == nLevels[nm] && moves[i].move == nMoves[nm] )
				b = true;
		if ( b )
		{	GenerateVarWindow(moves, names, nm, base, basename);
			return base;
		}
	}
	if ( nMoves[nm] < moves[nLevels[nm]].length / 2 )
	{	var n = nMoves[nm]*2;
		var from = moves[nLevels[nm]][ n ] & 0x3f;
		var to = moves[nLevels[nm]][ n+1 ] & 0x3f;
		names[ nNameCount[nm]   ] = leftDocument.images[ base + from ].src;
		names[ nNameCount[nm]+1 ] = leftDocument.images[ base + to ].src;
		var len = names[nNameCount[nm]].length;
		var nn = (Math.floor(( to / 8 )) + ( to % 8 ));
		var dest = ( nn % 2 ) == 1 ? "b" : "w";
		var piece = names[nNameCount[nm]].substring(len-6,len-5);
		if (( moves[nLevels[nm]][ n ] & 0x380 ) == 0x80 )
			piece = "q";
		else if (( moves[nLevels[nm]][ n ] & 0x380 ) == 0x100 )
			piece = "n";
		else if (( moves[nLevels[nm]][ n ] & 0x380 ) == 0x180 )
			piece = "b";
		else if (( moves[nLevels[nm]][ n ] & 0x380 ) == 0x200 )
			piece = "r";
		leftDocument.images[ base + to ].src = names[nNameCount[nm]].substring(0,len-6) + piece + dest + names[nNameCount[nm]].substring(len-4,len);
		nn = (Math.floor(( from / 8 )) + ( from % 8 ));
		if (( nn % 2 ) == 1 )
			leftDocument.images[ base + from ].src = EmptyBlackPath;
		else
			leftDocument.images[ base + from ].src = EmptyWhitePath;
		nMoves[nm]++;
		nNameCount[nm] = nNameCount[nm] + 2;
		if ( nMoves[nm] < moves[nLevels[nm]].length / 2 && ( moves[nLevels[nm]][ nMoves[nm]*2 ] & 0x40 ) == 0x40 )
			MF( moves, names, nm, base, bCheckV );
	}
	return base
}
function MB( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	if ( nMoves[nm] > 0 )
	{	nMoves[nm]--;
		nNameCount[nm] -= 2;
		var from = moves[nLevels[nm]][ nMoves[nm]*2 ] & 0x3f;
		var to = moves[nLevels[nm]][ nMoves[nm]*2+1 ] & 0x3f;
		leftDocument.images[ base + from ].src = names[ nNameCount[nm] ];
		leftDocument.images[ base + to ].src = names[ nNameCount[nm]+1 ];
		if (( moves[nLevels[nm]][ nMoves[nm]*2 ] & 0x40 ) == 0x40 )
			MB( moves, names, nm, base );
	}
	if ( nMoves[nm] == 0 )
		if ( nLevels[nm] > 0 )
		{	nMoves[nm] = moves[nLevels[nm]].move;
			nLevels[nm] = moves[nLevels[nm]].root;
			if (( moves[nLevels[nm]][nMoves[nm]*2] & 0x40 ) == 0x40 )
				nMoves[nm]--;
		}
	return base;
}
function GMS2(  moves, names, nm, base, nMoveNumber, nLevel, basename )
{	if ( nMoveNumber > 0 )
	{	var n = (nMoveNumber-1)*2;
		var off=1;
		for ( i=0; i <= n; i += 2 )
			if (( moves[nLevel][i] & 0x40 ) == 0x40 )
				off = off+1;
		var from = moves[nLevel][ n ] & 0x3f;
		var to = moves[nLevel][ n+1 ] & 0x3f;
		var len = leftDocument.images[ base + to ].src.length;
		var piece = leftDocument.images[ base + to ].src.substring(len-6,len-5);
		if ( piece == "q" )
			piece = pieces.substring(1,2);
		else if ( piece == "r" )
			piece = pieces.substring(4,5);
		else if ( piece == "b" )
			piece = pieces.substring(3,4);
		else if ( piece == "n" )
			piece = pieces.substring(2,3);
		else if ( piece ==  "k" )
			piece = pieces.substring(0,1);
		else piece = pieces.substring(5,6);
		var piece2 = "";
		if (( moves[nLevel][ n ] & 0x380 ) == 0x80 )
			piece2 = pieces.substring(1,2);
		else if (( moves[nLevel][ n ] & 0x380 ) == 0x100 )
			piece2 = pieces.substring(2,3);
		else if (( moves[nLevel][ n ] & 0x380 ) == 0x180 )
			piece2 = pieces.substring(3,4);
		else if (( moves[nLevel][ n ] & 0x380 ) == 0x200 )
			piece2 = pieces.substring(4,5);
		var lines = "abcdefgh";
		var rows = "87654321";
		var fromLine = from%8;
		var fromRow = Math.floor(from/8);
		var toLine = to%8;
		var toRow = Math.floor(to/8);
		var moveNumber = gmn( moves, nLevel ) + nMoveNumber-off;
		var result = (Math.floor((moveNumber)/2)+1).toString() + ". ";
		if ( leftDocument.images[ base + to ].src.substring(len-7,len-6) == "b" )
			result = result + "... ";
		if ( n >= 2 && (( moves[nLevel][n] & 0x40 ) == 0x40 ))
		{	if (( moves[nLevel][n-1] == 62 ) || ( moves[nLevel][n-1] == 6 ))
				result = result + "0-0"
			else if (( moves[nLevel][n-1] == 2 + 7 * 8 ) || ( moves[nLevel][n-1] == 2 + 0 * 8 ))
				result = result + "0-0-0"
			else
			{	var sep = "x";
				from = moves[nLevel][ n-2 ] & 0x3f;
				to = moves[nLevel][ n-1 ] & 0x3f;
				fromLine = from%8;
				fromRow = Math.floor(from/8);
				toLine = to%8;
				toRow = Math.floor(to/8);
				result = result	+ lines.substring( fromLine, fromLine+1 ) + rows.substring( fromRow, fromRow+1 )
										+ sep
										+ lines.substring( toLine, toLine+1 ) + rows.substring( toRow, toRow+1 )
										+ piece2 + " ep";
			}
		}
		else
		{	var len = names[ nNameCount[nm]-1 ].length;
			var substr = names[ nNameCount[nm]-1 ].substring( len-6, len );
			var sep = (( substr == "/w.gif" ) || ( substr == "\\w.gif" ) ||
						  ( substr == "/b.gif" ) || ( substr == "\\b.gif" )) ? "-" : "x";
			if ( piece2 != "" ) piece = "";
			result = result + piece.toUpperCase() + lines.substring( fromLine, fromLine+1 ) + rows.substring( fromRow, fromRow+1 )
				+ sep
				+ lines.substring( toLine, toLine+1 ) + rows.substring( toRow, toRow+1 )
				+ piece2;
		}
	}
	else
		result='';
	if (leftDocument.all)
	{	if ( bFrames )	name = 'i' + baseName + '0';
		else name = 'i' + baseName + nm;
		if ( result == '' )
			leftDocument.all.tags( "DIV" )[name].innerHTML = start_pos;
		else
			leftDocument.all.tags( "DIV" )[name].innerHTML = pos_after + result;
	}
	else if ( leftDocument.layers )
	{	var inx = nm;
		if ( bFrames ) inx = 0;
		leftDocument.layers[inx].document.layers[0].document.clear();
		if ( result == '' )
			var gesamt = "<center>" + start_pos + "</center>";
		else
			var gesamt = "<center>" + pos_after + " " + result + "</center>";
		leftDocument.layers[inx].document.layers[0].document.write(gesamt);
		leftDocument.layers[inx].document.layers[0].document.close();
	}
	else if ( leftDocument.getElementById )
	{	if ( bFrames ) name = 'i' + baseName + '0';
		else name = 'i' + baseName + nm;
		if ( result == '' )
			leftDocument.getElementById(name).innerHTML = start_pos;
		else
			leftDocument.getElementById(name).innerHTML = pos_after + result;
	}
	return result;
}
function GMS( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	var nLevel = nLevels[nm];
	var nMoveNumber = nMoves[nm];
	if ( nMoveNumber >= 0 && nMoveNumber <= moves[nLevel].length / 2 )
	{	if ( leftDocument.all )
		{	if ( nOld[nm] != -1 )
				rightDocument.anchors[nOld[nm]].style.background=BackColor;
			if ( nMoveNumber > 0 )
			{	nOld[nm] = moves[nLevel].base[nMoveNumber-1];
				nOld[nm] += CountAnchorLinks(nOld[nm]);
				rightDocument.anchors[nOld[nm]].style.background="gray";
				with ( rightDocument )
					with ( all.tags("a")[nOld[nm]] )
					{	if ( parent.frames[1] && ( offsetTop > body.scrollTop + offsetParent.offsetHeight - offsetHeight || offsetTop < body.scrollTop ))
							rightWindow.scrollTo( 0, offsetTop - ( offsetParent.offsetHeight / 2 ) );
					}
			}
			else
				nOld[nm] = -1;
		}
		return GMS2( moves, names, nm, base, nMoveNumber, nLevel, basename );
	}
	else
		return "??";
}
function gm( moves, names, nm, base, basename, n, m )
{	base = SyncPicture( base, basename );
	GoStart(moves,names,nm,base,basename );
	gm_sub( moves,names,nm,base,basename,n,m);
	GMS( moves, names, nm, base, basename );
}
function gmn( moves, m )
{	if ( m > 0 )
	{	var off=0;
		var n2 = moves[m].move;
		var m2 = moves[m].root;
		for ( i=0; i <= n2*2; i += 2 )
			if (( moves[m2][i] & 0x40 ) == 0x40 )
				off = off+1;
		return gmn( moves, m2 ) + ( n2 - off );
	}
	return 0;
}
function gm_sub( moves, names, nm, base, basename, n, m )
{	if ( m > 0 )
	{	var off=0;
		var n2 = moves[m].move;
		var m2 = moves[m].root;
		for ( i=0; i <= n2*2; i += 2 )
			if (( moves[m2][i] & 0x40 ) == 0x40 )
				off = off+1;
		gm_sub( moves,names,nm,base, basename, n2-off, m2  );
	}
	nLevels[nm]=m;
	nMoves[nm]=0;
	for ( i=0; i < n; i++ )
		MF(moves,names,nm,base,basename, false);
}
