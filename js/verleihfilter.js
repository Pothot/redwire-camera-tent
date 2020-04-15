function onChangeSelector(e) {
  let t = "";
  t = "change" === e.type ? e.target.value : e;
  const n = document.getElementsByClassName("equipment-item"),
    i = [];
  if ("Alles" === t)
    for (let e = 0; e < n.length; e++) n[e].setAttribute("style", "display: block"), i.push(n[e].lastChild.previousSibling);
  else
    for (let e = 0; e < n.length; e++) n[e].dataset.equipmentClass === t && n[e].dataset.equipmentClass ? (n[e].setAttribute("style", "display: block"), i.push(n[e].lastChild.previousSibling)) : n[e].setAttribute("style", "display: none");
  sessionStorage.setItem("lastEquipmentSelection", t);
  for (let e = 0; e < i.length; e++) i[e].childNodes[1].setAttribute("style", "display: block");
  i[i.length - 1].childNodes[1].setAttribute("style", "display: none")
}

	equipmentSelector = document.getElementById("equipment-selector");
  equipmentSelector.addEventListener("change", onChangeSelector);

  const equipmentItems = document.getElementsByClassName("equipment-item"),
	listEquipmentClasses = [];
  for (let e = 0; e < equipmentItems.length; e++) {
    if((listEquipmentClasses.indexOf(equipmentItems[e].dataset.equipmentClass) == -1) && equipmentItems[e].dataset.equipmentClass)
     {
       listEquipmentClasses.push(equipmentItems[e].dataset.equipmentClass);
     }
  }

  equipmentSelector.options.length = 0;
  const option = document.createElement("option");

  if (option.text = "Alles", option.setAttribute("value", "Alles"),
  equipmentSelector.add(option),
  listEquipmentClasses.forEach(function(e)
  	{
  		const t = document.createElement("option");
  		t.text = e, t.setAttribute("value", e), equipmentSelector.add(t)
  	}), sessionStorage.getItem("lastEquipmentSelection"))
  {
  	const e = equipmentSelector.options;
  	for (let t = 0; t < e.length; t++)
  		if (e[t].value === sessionStorage.getItem("lastEquipmentSelection"))
  		{
  			equipmentSelector.selectedIndex = t, onChangeSelector(e[t].value);
  			break
  		}
  }

  visibleGreySeperators = document.getElementsByClassName("seperatorGrey"), visibleGreySeperators[visibleGreySeperators.length - 1].setAttribute("style", "display: none");

  function onClickPicture(e)
	{
		const t = document.getElementById("equipmentPictureModalTitle"),
			n = document.getElementById("equipmentPictureModalBody");
		n.innerHTML = "";
		const i = e.target.cloneNode(!0);
    i.setAttribute("id", "equipment-picture-in-modal");
    const div = document.createElement("div");
    div.appendChild(i);
		n.appendChild(div);
    t.innerHTML = e.target.getAttribute("alt"), $("#equipmentPictureModal").modal(
		{
			show: !0
		})
	}

  allPictures = document.getElementsByClassName("equipment-picture");
  for (let e = 0; e < allPictures.length; e++) allPictures[e].addEventListener("click", onClickPicture);

  function onButtonPrint()
	{
		const e = document.getElementById("print-type-of-list"),
		t = document.getElementById("print-email"),
		n = document.getElementById("equipment-selector");
		e.innerHTML = "Liste: " + n.options[n.selectedIndex].value;
		var i = String.fromCharCode(111, 102, 102) + "ice",
		s = "red" + String.fromCharCode(119, 105, 114, 101),
		l = String.fromCharCode(97, 116);
		t.innerHTML = "Email: " + i + "@" + s + "." + l, window.print()
	}

	filterLogic = document.getElementById("filter-logic");
  filterLogic.removeAttribute("style");
  const useragent = navigator.userAgent.toLowerCase(),
  	isAndroidMobileFirefox = useragent.indexOf("android") > -1 && useragent.indexOf("mobile") > -1 && useragent.indexOf("firefox") > -1;
  if (!isAndroidMobileFirefox)
  {
  	document.getElementById("print-button").removeAttribute("style")
  }
