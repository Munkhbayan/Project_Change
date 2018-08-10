var SlideIndex = 0;
ShowSlides();
ShowBlurredSlidesL();
ShowBlurredSlidesR();

function ShowSlides()
{
	var i;
	var CurSlides = document.getElementsByClassName("Slides");
	var CurBlurredSlidesL = document.getElementsByClassName("BlurredSlidesL");
	var CurBlurredSlidesR = document.getElementsByClassName("BlurredSlidesR");
	//var Dots = document.getElementsByClassName("Dots");
	/*if (n > CurSlides.length)
	{
		SlideIndex = 1;
	}
	if (n < 1)
	{
		SlideIndex = CurSlides.length;
	}*/
	for (i = 0; i < CurSlides.length; i++)
	{
		CurSlides[i].style.display = "none";
	}
	for (i = 0; i < CurBlurredSlidesL.length; i++)
	{
		CurBlurredSlidesL[i].style.display = "none";
	}
	for (i = 0; i < CurBlurredSlidesR.length; i++)
	{
		CurBlurredSlidesR[i].style.display = "none";
	}
	SlideIndex++;
	/*for (i = 0; i < Dots.length; i++)
	{
		Dots[i].className = Dots[i].className.replace(" active", "");
	}
	CurSlides[SlideIndex - 1].style.display = "block";
	Dots[SlideIndex - 1].className += " active";*/
	if (SlideIndex > CurSlides.length)
	{
		SlideIndex = 1;
	}
	if (SlideIndex > CurBlurredSlidesL.length)
	{
		SlideIndex = 1;
	}
	if (SlideIndex > CurBlurredSlidesR.length)
	{
		SlideIndex = 1;
	}
	CurBlurredSlidesR[SlideIndex - 1].style.display = "block";
	CurBlurredSlidesL[SlideIndex - 1].style.display = "block";
	CurSlides[SlideIndex - 1].style.display = "block";
	setTimeout(ShowSlides, 3500);
}